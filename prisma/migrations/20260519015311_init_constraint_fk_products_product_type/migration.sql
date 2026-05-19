-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "Product_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
