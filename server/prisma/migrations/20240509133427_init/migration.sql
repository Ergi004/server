/*
  Warnings:

  - Added the required column `category_title` to the `LawCategory` table without a default value. This is not possible if the table is not empty.
  - Made the column `category_number` on table `LawCategory` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `part_title` to the `Part` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `LawCategory` ADD COLUMN `category_title` VARCHAR(191) NOT NULL,
    MODIFY `category_number` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Part` ADD COLUMN `part_title` VARCHAR(191) NOT NULL;
