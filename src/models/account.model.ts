import "reflect-metadata";
import { Exclude, Expose } from "class-transformer";

class AccountDTO {
    @Expose()
    Id!: number;

    @Expose()
    Id_profile!: number;

    @Expose()
    username!: string;

    @Exclude()
    password!: string;

    @Expose()
    status!: number;

    @Expose()
    Id_roles!: number;

    @Expose()
    token!: string | null;
}

export default AccountDTO;