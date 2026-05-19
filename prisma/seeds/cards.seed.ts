import { PrismaClient } from "@prisma/client";

export async function seedCards(prisma: PrismaClient) {
    await prisma.cards.createMany({
        data: [
            { id_user: 1, status: true, created_at: new Date(), updated_at: null },
            { id_user: 2, status: true, created_at: new Date(), updated_at: null },
            { id_user: 3, status: true, created_at: new Date(), updated_at: null },
            { id_user: 4, status: true, created_at: new Date(), updated_at: null },
            { id_user: 5, status: true, created_at: new Date(), updated_at: null },
            { id_user: 6, status: true, created_at: new Date(), updated_at: null },
            { id_user: 7, status: true, created_at: new Date(), updated_at: null },
            { id_user: 8, status: true, created_at: new Date(), updated_at: null },
            { id_user: 9, status: true, created_at: new Date(), updated_at: null },
            { id_user: 10, status: true, created_at: new Date(), updated_at: null },
        ],
        skipDuplicates: true,
    });
}