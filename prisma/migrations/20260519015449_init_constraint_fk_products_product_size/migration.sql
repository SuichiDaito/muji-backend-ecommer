-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_id_size_fkey" FOREIGN KEY ("id_size") REFERENCES "Size_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
