import { PrismaClient } from "@prisma/client";

export async function seedOrders(prisma: PrismaClient) {
    await prisma.orders.createMany({
        data: [
            { id_user: 1, id_payment: 1, created_at: new Date(), updated_at: null },
            { id_user: 2, id_payment: 2, created_at: new Date(), updated_at: null },
            { id_user: 3, id_payment: 3, created_at: new Date(), updated_at: null },
            { id_user: 4, id_payment: 4, created_at: new Date(), updated_at: null },
            { id_user: 5, id_payment: 1, created_at: new Date(), updated_at: null },
            { id_user: 6, id_payment: 2, created_at: new Date(), updated_at: null },
            { id_user: 7, id_payment: 3, created_at: new Date(), updated_at: null },
            { id_user: 8, id_payment: 4, created_at: new Date(), updated_at: null },
            { id_user: 9, id_payment: 1, created_at: new Date(), updated_at: null },
            { id_user: 10, id_payment: 2, created_at: new Date(), updated_at: null },
        ],
        skipDuplicates: true,
    });
}