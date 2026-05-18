-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_payment" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);
