import authRepositories from "../repositories/authRepositories";
const bcrypt = require("bcrypt");

class AuthServices {
    static async login(username: string) {
        const user = await authRepositories.findByUserName(username);
        return user;
    }

    static async connect() {
        const result = await authRepositories.connect();
        return result;
    }
}

export default AuthServices;  