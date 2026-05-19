import { PrismaClient } from "@prisma/client";
import { seedRoles } from "./seeds/role.seed";
import { seedColors } from "./seeds/color_type.seed";
import { seedSizes } from "./seeds/size_type.seed";
import { seedPayments } from "./seeds/payment_type.seed";
import { seedProductTypes } from "./seeds/product_type.seed";
import { seedOrders } from "./seeds/orders.seed";
import { seedOrderItems } from "./seeds/order_items.seed";
import { seedCardItems } from "./seeds/card_items.seed";
import { seedCards } from "./seeds/cards.seed";
import { seedProfiles } from "./seeds/profile.seed";
import { seedProducts } from "./seeds/product.seed";


const prisma = new PrismaClient();

async function main() {
    await seedRoles(prisma);
    await seedColors(prisma);
    await seedSizes(prisma);
    await seedPayments(prisma);
    await seedProductTypes(prisma);

    await seedProfiles(prisma);
    await seedProducts(prisma);

    await seedCards(prisma);
    await seedCardItems(prisma);

    await seedOrders(prisma);
    await seedOrderItems(prisma);

    console.log("ALL SEEDS DONE");
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });