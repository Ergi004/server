/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `role` ENUM('Admin', 'SimpleUser') NOT NULL DEFAULT 'SimpleUser';

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);
