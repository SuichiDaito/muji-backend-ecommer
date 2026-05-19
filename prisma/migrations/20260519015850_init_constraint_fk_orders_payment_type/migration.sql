-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_id_payment_fkey" FOREIGN KEY ("id_payment") REFERENCES "Payment_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
