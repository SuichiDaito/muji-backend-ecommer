-- CreateTable
CREATE TABLE "Size_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Size_type_pkey" PRIMARY KEY ("id")
);
