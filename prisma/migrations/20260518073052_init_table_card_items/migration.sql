-- CreateTable
CREATE TABLE "Card_items" (
    "id" SERIAL NOT NULL,
    "id_card" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,
    "name_product" TEXT NOT NULL,
    "size_product" TEXT NOT NULL,
    "color_product" TEXT NOT NULL,
    "price_original" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "subtotal_amount" INTEGER NOT NULL,
    "is_selected" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Card_items_pkey" PRIMARY KEY ("id")
);
