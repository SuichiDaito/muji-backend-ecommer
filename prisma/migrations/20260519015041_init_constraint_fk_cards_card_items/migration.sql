-- AddForeignKey
ALTER TABLE "Card_items" ADD CONSTRAINT "Card_items_id_card_fkey" FOREIGN KEY ("id_card") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
