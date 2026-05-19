-- AddForeignKey
ALTER TABLE "Card_items" ADD CONSTRAINT "Card_items_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
