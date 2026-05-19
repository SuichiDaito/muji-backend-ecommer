-- AddForeignKey
ALTER TABLE "Order_items" ADD CONSTRAINT "Order_items_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
