/*
  Warnings:

  - You are about to drop the column `catgory_number` on the `LawCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `LawCategory` DROP COLUMN `catgory_number`,
    ADD COLUMN `category_number` VARCHAR(191) NULL;
