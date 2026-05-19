-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_id_color_fkey" FOREIGN KEY ("id_color") REFERENCES "Color_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
