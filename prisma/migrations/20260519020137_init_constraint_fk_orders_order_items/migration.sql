-- AddForeignKey
ALTER TABLE "Order_items" ADD CONSTRAINT "Order_items_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
