-- CreateTable
CREATE TABLE "Product_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Product_type_pkey" PRIMARY KEY ("id")
);
