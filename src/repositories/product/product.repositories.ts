import prisma from "../../config/prisma"

const getProducts = async (id: number) => {
    const result = await prisma.products.findUnique({
        where: {
            id: id
        }
    })

    return result;
}

const getAllProduct = async () => {
    const listResult = await prisma.products.findMany({
        // include: product_type
    });

    return listResult;
}

export = { getProducts, getAllProduct };