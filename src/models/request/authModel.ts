export type LoginRequestDTO = {
    email: string,
    password: string
}

// export type RefreshTokenDTO = {
//     refreshToken: string,
//     id: number
// }

export type RegisterRequestDTO = {
    name: string;
    date: string;
    gender: number;
    address: string;
    email: string;
    phone: string;
    Id_profile: number;
    username: string;
    password: string;
}