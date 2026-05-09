import "reflect-metadata";
import { Exclude, Expose } from "class-transformer";

class ProfileDTO {
    @Expose()
    id!: number;

    @Expose()
    id_role!: number;

    @Expose()
    name!: string;

    @Expose()
    gender!: string;

    @Expose()
    date!: Date;

    @Expose()
    address!: string;

    @Expose()
    email!: string;

    @Exclude()
    password!: string;

    @Expose()
    phone!: number;

    @Expose()
    create_at!: Date;

    @Expose()
    delete_at!: Date | null;

    @Expose()
    refresh_token!: string;

    @Expose()
    revoked!: boolean;

}

export default ProfileDTO;