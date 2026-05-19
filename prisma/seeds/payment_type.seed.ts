import { PrismaClient } from "@prisma/client";

export async function seedPayments(prisma: PrismaClient) {
    await prisma.payment_type.createMany({
        data: [
            { name: "card", status: true },
            { name: "credit_card", status: true },
            { name: "COD", status: true },
            { name: "e-commerce", status: true },
        ],
        skipDuplicates: true,
    });
}