"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authRepositories_1 = __importDefault(require("../repositories/authRepositories"));
// đối với lớp services này chỉ để thực hiện gọi qua bên repositories để sử dụng lại 
// những function bên trong repo (vì chỗ này sẽ tiếp xúc, giao tiếp trực tiếp với database)
class AuthServices {
    static login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield authRepositories_1.default.findByUser(data);
            return user;
        });
    }
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield authRepositories_1.default.connect();
            return result;
        });
    }
}
exports.default = AuthServices;
//# sourceMappingURL=authServices.js.map