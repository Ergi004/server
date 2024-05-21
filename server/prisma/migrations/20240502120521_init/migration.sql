/*
  Warnings:

  - The primary key for the `Parts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Parts` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Parts` table. All the data in the column will be lost.
  - Added the required column `part_id` to the `Parts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `part_title` to the `Parts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Parts` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `title`,
    ADD COLUMN `part_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `part_title` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`part_id`);
