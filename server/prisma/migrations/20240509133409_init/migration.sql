/*
  Warnings:

  - You are about to drop the column `category_title` on the `LawCategory` table. All the data in the column will be lost.
  - You are about to drop the column `part_title` on the `Part` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `LawCategory` DROP COLUMN `category_title`;

-- AlterTable
ALTER TABLE `Part` DROP COLUMN `part_title`;
