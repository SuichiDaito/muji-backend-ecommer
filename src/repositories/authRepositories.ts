
import Database from "../config/database";
import { LoginRequestDTO } from "../models/authModel";

// nếu như muốn tuân thủ theo quy tắc của clean architecture thì phải phân biệt lỗi ở  mỗi chỗ mỗi khác nhau.
// ở chỗ repositories này thì chỉ thực hiện các chức năng với data access bên trong
// hàon toàn không có bất kỳ loại kiểm tra hoặc là validate tại đây.
class AuthRepositories {
    static async findByUser(data: LoginRequestDTO) {
        const connection = await Database.connection();
        const [rows] = await connection.execute('select * from Account where username = ?', [data.username]);

        return rows as any;
    }

    static async connect() {
        const connection = await Database.connection();
        const [rows] = await connection.execute("SELECT * FROM Account");

        return rows;
    }
}

export default AuthRepositories;