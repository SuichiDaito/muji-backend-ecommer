import authRepositories from "../repositories/authRepositories";
import { LoginRequestDTO } from "../models/authModel";
import { plainToInstance } from "class-transformer";
import AccountDTO from "../models/account.model";
import { Errors } from "../errors/error-factory";

// đối với lớp services này chỉ để thực hiện gọi qua bên repositories để sử dụng lại 
// những function bên trong repo (vì chỗ này sẽ tiếp xúc, giao tiếp trực tiếp với database)
class AuthServices {
    static async login(data: LoginRequestDTO) {
        let rows: AccountDTO[] = [];
        rows = await authRepositories.findByUser(data);

        if (rows.length == 0) {
            throw Errors.userNotFound();
        }
        const account = plainToInstance(AccountDTO, rows);
        return account;
    }

    static async connect() {
        const result = await authRepositories.connect();
        return result;
    }
}

export default AuthServices;  