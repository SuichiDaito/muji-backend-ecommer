-- CreateTable
CREATE TABLE "Order_items" (
    "id" SERIAL NOT NULL,
    "id_order" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,
    "name_product" TEXT NOT NULL,
    "color_product" TEXT NOT NULL,
    "size_product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price_original" INTEGER NOT NULL,
    "name_payment" TEXT NOT NULL,
    "gross_amount" INTEGER NOT NULL,
    "vat_amount" INTEGER NOT NULL,
    "net_amount" INTEGER NOT NULL,

    CONSTRAINT "Order_items_pkey" PRIMARY KEY ("id")
);
