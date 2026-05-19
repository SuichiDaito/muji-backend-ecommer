import { LoginRequestDTO, RegisterRequestDTO } from "../../models/request/authModel";
import prisma from "../../config/prisma";


const deleteRefreshToken = async (id: number) => {
    const result = await prisma.profiles.update({
        where: {
            id: id
        },
        data: {
            refresh_token: null
        }
    });

    return result;
}

const getProfileUser = async (id: number) => {
    const result = await prisma.profiles.findUnique({
        where: {
            id: id
        }
    });

    return result as any;
}

const findEmailUser = async (data: LoginRequestDTO) => {
    const result = await prisma.profiles.findUnique({
        where: {
            email: data.email
        }
    });
    return result as any;
}

const updateRefreshToken = async (refreshToken: string, id: number) => {
    const result = await prisma.profiles.update({
        where: {
            id: id
        },
        data: {
            refresh_token: refreshToken
        }
    });

    return result as any;
}

const registerProfiles = async (data: RegisterRequestDTO) => {
    const result = await prisma.profiles.create({
        data: {
            name: data.name,
            gender: data.gender,
            date: data.date,
            address: data.address,
            password: data.password,
            phone: data.phone,
            email: data.email,
            refresh_token: data.refresh_token,
            revoked: data.revoked,
            created_at: data.created_at,
            updated_at: data.updated_at,
            role: {
                connect: {
                    id: data.roleId
                }
            }
        }
    });

    return result;
}

const connect = async () => {
    const result = await prisma.profiles.findMany();
    return result;
}

export default {
    findEmailUser,
    connect,
    registerProfiles,
    updateRefreshToken,
    getProfileUser,
    deleteRefreshToken
};