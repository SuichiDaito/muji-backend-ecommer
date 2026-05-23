import prisma from "../../config/prisma"

const getCardRepositories = async (id: number) => {
    const result = await prisma.cards.findUnique({
        where: {
            id: id
        }
    });

    return result;
}

const getAllCardRepositories = async () => {

    const result = await prisma.cards.findMany();

    return result;
}

export = { getCardRepositories, getAllCardRepositories }