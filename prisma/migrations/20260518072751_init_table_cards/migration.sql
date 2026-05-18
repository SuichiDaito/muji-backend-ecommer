-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);
