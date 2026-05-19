import { PrismaClient } from "@prisma/client";

export async function seedColors(prisma: PrismaClient) {
    await prisma.color_type.createMany({
        data: [
            { name: "red", status: true },
            { name: "blue", status: true },
            { name: "black", status: true },
            { name: "white", status: true },
            { name: "green", status: true },
        ],
        skipDuplicates: true, // an toàn khi chạy lại seed
    });
}