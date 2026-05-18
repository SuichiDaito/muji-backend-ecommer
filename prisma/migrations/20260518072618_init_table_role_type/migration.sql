-- CreateTable
CREATE TABLE "Role_type" (
    "id" SERIAL NOT NULL,
    "name_role" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Role_type_pkey" PRIMARY KEY ("id")
);
