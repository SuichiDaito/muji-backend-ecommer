export type LoginRequestDTO = {
    email: string,
    password: string
}

export type RegisterRequestDTO = {
    roleId: number;
    name: string;
    gender: boolean;
    date: Date;
    address: string;
    password: string;
    phone: string;
    email: string;
    refresh_token: string;
    revoked: boolean;
    created_at: Date;
    updated_at: Date;
}