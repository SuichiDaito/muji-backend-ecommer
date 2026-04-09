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
const database_1 = __importDefault(require("../config/database"));
class AuthRepositories {
    static findByUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = database_1.default.connection();
            try {
                const [rows] = yield (yield connection).execute('select * from Account where username = ?', [data.username]);
                console.log("show the result", [rows]);
                console.log("show the object of rows", typeof rows);
                console.log("parse of the object", JSON.stringify(rows));
                console.log("parse of the typeof object ", typeof JSON.stringify(rows));
                return rows;
            }
            catch (err) {
                console.log("show the error", err);
                console.log("err in the call authRepo");
                return null;
            }
        });
    }
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = database_1.default.connection();
            try {
                const [rows] = yield (yield connection).execute("SELECT * FROM Account");
                console.log("show the result", [rows]);
                return rows;
            }
            catch (err) {
                console.log("show the error", err);
            }
        });
    }
}
exports.default = AuthRepositories;
//# sourceMappingURL=authRepositories.js.map