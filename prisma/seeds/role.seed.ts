import { PrismaClient } from "@prisma/client";

export async function seedRoles(prisma: PrismaClient) {
    await prisma.role_type.createMany({
        data: [
            { name_role: "guest" },
            { name_role: "customer" },
            { name_role: "VIP" }
        ],
        skipDuplicates: true
    });
}