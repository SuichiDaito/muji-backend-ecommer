-- AddForeignKey
ALTER TABLE "Profiles" ADD CONSTRAINT "Profiles_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "Role_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
