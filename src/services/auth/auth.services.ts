import authRepositories from "../../repositories/auth/auth.repositories";
import authMiddleware from "../../middleware/auth.middleware";
import { LoginRequestDTO, } from "../../models/request/authModel";
import { plainToInstance } from "class-transformer";
import ProfileDTO from "../../models/response/profile.model";
import { AuthErrorCodes } from "../../errors/error-factory/auth.error_factory";


const loginServices = async (data: LoginRequestDTO) => {
    let rows: ProfileDTO[] = [];
    rows = await authRepositories.findEmailUser(data);
    if (rows.length != 0) {
        const isCompare = await authMiddleware.comparePassword(data.password, rows[0].password);
        if (isCompare == false) {
            throw AuthErrorCodes.invalidEmailAndPassword();
        }
    } else {
        throw AuthErrorCodes.invalidEmailAndPassword();
    }

    const profile = plainToInstance(ProfileDTO, rows);
    return profile;
}

const refreshTokenServices = async (refreshToken: string, id: number) => {
    const result = await authRepositories.updateRefreshToken(refreshToken, id);

    if (result.rowCount == 0) {
        throw AuthErrorCodes.wrongToken();
    }
    return result;
}

const connectServices = async () => {
    const result = await authRepositories.connect();
    return result;
}

export default { loginServices, connectServices, refreshTokenServices };