/*
  Warnings:

  - You are about to drop the column `email` on the `products` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "products_email_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "email";
