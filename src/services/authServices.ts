import authRepositories from "../repositories/authRepositories";
import { LoginRequestDTO } from "../models/request/authModel";
import { plainToInstance } from "class-transformer";
import ProfileDTO from "../models/response/profile.model";
import { Errors } from "../errors/error-factory";
import AuthMiddleware from "../middleware/auth.middleware";

// đối với lớp services này chỉ để thực hiện gọi qua bên repositories để sử dụng lại
// những function bên trong repo (vì chỗ này sẽ tiếp xúc, giao tiếp trực tiếp với database)
// việc thực hiện các hàm validate bên trong layer này chỉ sử dụng cho các loại business bên trong 
// ví dụ việc kiểm tra để xuất các lỗi mà hệ thống quy định bên trong thì nên sử dụng và xuất lỗi ở đây
class AuthServices {
    static async login(data: LoginRequestDTO) {
        let rows: ProfileDTO[] = [];
        rows = await authRepositories.login(data);

        if (rows.length != 0) {
            const isCompare = await AuthMiddleware.comparePassword(data.password, rows[0].password);
            if (isCompare == false) {
                throw Errors.invalidUsernameAndPassword();
            }
        } else {
            throw Errors.invalidUsernameAndPassword();
        }

        const account = plainToInstance(ProfileDTO, rows);
        return account;
    }

    static async connect() {
        const result = await authRepositories.connect();
        return result;
    }
}

export default AuthServices;  