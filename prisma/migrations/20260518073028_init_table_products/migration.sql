-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "id_type" INTEGER NOT NULL,
    "id_color" INTEGER NOT NULL,
    "id_size" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price_original" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
