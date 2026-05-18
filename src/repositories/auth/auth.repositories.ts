
import Database from "../../config/database";
import { LoginRequestDTO, RegisterRequestDTO } from "../../models/request/authModel";
import Profile from "../../database/models/profiles";


const deleteRefreshToken = async (id: number) => {
    const pool = Database.getPool();
    const result = await pool.query("update profiles set refresh_token = null where id = $1", [id]);

    return result.rowCount;
}

const getProfileUser = async (id: number) => {
    const pool = Database.getPool();
    const result = await pool.query("select * from profiles where id = $1", [id]);

    return result.rows;

}

const findEmailUser = async (data: LoginRequestDTO) => {
    const pool = Database.getPool();
    const result = await pool.query('select * from profiles where email = $1', [data.email]);
    return result.rows;
}

const updateRefreshToken = async (refreshToken: string, id: number) => {
    const pool = Database.getPool();
    const result = await pool.query("update profiles set refresh_token = $1 where id = $2", [refreshToken, id]);
    return result;
}

const register = async (data: RegisterRequestDTO) => {
    // thực hiện transactions ở đây để đảm bảo được flow này nó sẽ được hoàn thành 
}

const connect = async () => {
    const raw = await Profile.findAll({ raw: true });
    console.log("show the db", raw);

    return raw;
}

export default { findEmailUser, connect, register, updateRefreshToken, getProfileUser, deleteRefreshToken };