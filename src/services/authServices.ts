import authRepositories from "../repositories/authRepositories";
// const bcrypt = require("bcrypt");
import { LoginRequest } from "../models/authModel";


// đối với lớp services này chỉ để thực hiện gọi qua bên repositories để sử dụng lại 
// những function bên trong repo (vì chỗ này sẽ tiếp xúc, giao tiếp trực tiếp với database)
class AuthServices {
    static async login(data: LoginRequest) {
        const user = await authRepositories.findByUser(data);
        return user;
    }

    static async connect() {
        const result = await authRepositories.connect();
        return result;
    }
}

export default AuthServices;  