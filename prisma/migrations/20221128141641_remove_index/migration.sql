/*
  Warnings:

  - You are about to drop the column `textSearch` on the `Brand` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Brand_textSearch_idx";

-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "textSearch";
