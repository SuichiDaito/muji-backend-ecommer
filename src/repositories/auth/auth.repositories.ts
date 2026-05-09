
import Database from "../../config/postgre_db";
import { LoginRequestDTO, RegisterRequestDTO } from "../../models/request/authModel";

// nếu như muốn tuân thủ theo quy tắc của clean architecture thì phải phân biệt lỗi ở  mỗi chỗ mỗi khác nhau.
// ở chỗ repositories này thì chỉ thực hiện các chức năng với data access bên trong
// hàon toàn không có bất kỳ loại kiểm tra hoặc là validate tại đây.

const findEmailUser = async (data: LoginRequestDTO) => {
    const pool = Database.getPool();
    const result = await pool.query('select * from profile where email = $1', [data.email]);

    return result.rows;
}

const connect = async () => {
    const pool = Database.getPool();
    const rows = await pool.query("select * from profile");

    return rows;
}

const updateRefreshToken = async (refreshToken: string, id: number) => {
    const pool = Database.getPool();
    const result = await pool.query("update profile set refresh_token = $1 where id = $2", [refreshToken, id]);
    return result;
}

const register = async (data: RegisterRequestDTO) => {
    // thực hiện transactions ở đây để đảm bảo được flow này nó sẽ được hoàn thành 
}

export default { findEmailUser, connect, register, updateRefreshToken };