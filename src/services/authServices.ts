import authRepositories from "../repositories/authRepositories";
import { LoginRequestDTO } from "../models/authModel";
import { plainToInstance } from "class-transformer";
import AccountDTO from "../models/account.model";
import { Errors } from "../errors/error-factory";
import AuthMiddleware from "../middleware/login.middleware";

// đối với lớp services này chỉ để thực hiện gọi qua bên repositories để sử dụng lại
// những function bên trong repo (vì chỗ này sẽ tiếp xúc, giao tiếp trực tiếp với database)
// việc thực hiện các hàm validate bên trong layer này chỉ sử dụng cho các loại business bên trong 
// ví dụ việc kiểm tra để xuất các lỗi mà hệ thống quy định bên trong thì nên sử dụng và xuất lỗi ở đây
class AuthServices {
    static async login(data: LoginRequestDTO) {
        let rows: AccountDTO[] = [];
        rows = await authRepositories.findByUser(data);
        // kiểm tra thêm password tại đây để kết luận là cái account này có hợp lệ hay không
        // chỗ này phải kiểm tra 2 lần là vì không thể nào để cho hacker thực hiện một số string hack vào bên trong sql được. 
        // Nên là bảo vệ sql 1 phần, bảo vệ luôn các request là 1 phần khác. 

        if (rows.length != 0) {
            const isCompare = await AuthMiddleware.comparePassword(data.password, rows[0].password);
            if (isCompare == false) {
                throw Errors.invalidUsernameAndPassword();
            }
        } else {
            throw Errors.invalidUsernameAndPassword();
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