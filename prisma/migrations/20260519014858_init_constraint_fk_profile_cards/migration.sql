-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
