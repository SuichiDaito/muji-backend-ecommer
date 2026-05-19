import authRepositories from "../../repositories/auth/auth.repositories";
import authMiddleware from "../../middleware/auth.middleware";
import { LoginRequestDTO, } from "../../models/request/authModel";
import { plainToInstance } from "class-transformer";
import ProfileDTO from "../../models/response/profile.model";
import { AuthErrorCodes } from "../../errors/error-factory/auth.error_factory";
import prisma from "../../config/prisma";

const deleteRefreshServices = async (id: number) => {
    const rows = await authRepositories.deleteRefreshToken(id);
    return rows;
}

const getProfileServices = async (id: number) => {
    let rows: ProfileDTO;
    rows = await authRepositories.getProfileUser(id);

    if (rows == null) {
        throw AuthErrorCodes.invalidEmailAndPassword();
    }

    const profile = plainToInstance(ProfileDTO, rows, {
        excludeExtraneousValues: true
    });

    return profile;
}


const loginServices = async (data: LoginRequestDTO) => {
    let rows: ProfileDTO;
    rows = await authRepositories.findEmailUser(data);
    if (rows != null) {
        const isCompare = await authMiddleware.comparePassword(data.password, rows['password']);
        if (isCompare == false) {
            throw AuthErrorCodes.invalidEmailAndPassword();
        }
    } else {
        throw AuthErrorCodes.invalidEmailAndPassword();
    }

    const profile = plainToInstance(ProfileDTO, rows, {
    });
    excludeExtraneousValues: true
    return profile;
}

const refreshTokenServices = async (refreshToken: string, id: number) => {
    const result = await authRepositories.updateRefreshToken(refreshToken, id);
    return result;
}

const connectServices = async () => {
    const result = await authRepositories.connect();
    return result;
}

export default {
    loginServices,
    connectServices,
    refreshTokenServices,
    getProfileServices,
    deleteRefreshServices
};