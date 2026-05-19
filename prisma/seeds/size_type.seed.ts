import { PrismaClient } from "@prisma/client";

export async function seedSizes(prisma: PrismaClient) {
    await prisma.size_type.createMany({
        data: [
            { name: "S", status: true },
            { name: "M", status: true },
            { name: "L", status: true },
            { name: "XL", status: true },
        ],
        skipDuplicates: true,
    });
}