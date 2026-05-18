-- CreateTable
CREATE TABLE "Payment_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Payment_type_pkey" PRIMARY KEY ("id")
);
