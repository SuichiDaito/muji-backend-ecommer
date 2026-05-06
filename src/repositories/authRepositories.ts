
import Database from "../config/postgre_db";
import { LoginRequestDTO, RegisterRequestDTO } from "../models/request/authModel";

// nếu như muốn tuân thủ theo quy tắc của clean architecture thì phải phân biệt lỗi ở  mỗi chỗ mỗi khác nhau.
// ở chỗ repositories này thì chỉ thực hiện các chức năng với data access bên trong
// hàon toàn không có bất kỳ loại kiểm tra hoặc là validate tại đây.
class AuthRepositories {
    static async login(data: LoginRequestDTO) {
        const pool = Database.getPool();
        const rows = await pool.query('select * from profile where email = $1', [data.email]);

        return rows as any;
    }

    static async connect() {
        const pool = Database.getPool();
        const rows = await pool.query("select * from profile");

        return rows;
    }

    static async register(data: RegisterRequestDTO) {
        // thực hiện transactions ở đây để đảm bảo được flow này nó sẽ được hoàn thành 
    }
}

export default AuthRepositories;