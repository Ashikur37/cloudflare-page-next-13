-- This is an empty migration.
ALTER TABLE "Category" DROP COLUMN "teacherId",
ADD COLUMN  "parentId" INTEGER ;
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;