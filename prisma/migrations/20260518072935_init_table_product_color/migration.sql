-- CreateTable
CREATE TABLE "Color_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Color_type_pkey" PRIMARY KEY ("id")
);
