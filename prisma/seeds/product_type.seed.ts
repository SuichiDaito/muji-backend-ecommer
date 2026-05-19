import { PrismaClient } from "@prisma/client";

export async function seedProductTypes(prisma: PrismaClient) {
    await prisma.product_type.createMany({
        data: [
            { name: "clothes", status: true },
            { name: "shoes", status: true },
            { name: "sandals", status: true },
            { name: "hat", status: true },
            { name: "accessories", status: true },
        ],
        skipDuplicates: true,
    });
}