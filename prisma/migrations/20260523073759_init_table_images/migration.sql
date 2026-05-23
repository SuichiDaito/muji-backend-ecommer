-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL DEFAULT '',
    "alt" TEXT,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);
