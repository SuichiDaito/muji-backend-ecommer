-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
