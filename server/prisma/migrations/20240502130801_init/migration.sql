/*
  Warnings:

  - You are about to drop the `Law` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Law` DROP FOREIGN KEY `Law_category_id_fkey`;

-- DropTable
DROP TABLE `Law`;

-- CreateTable
CREATE TABLE `Laws` (
    `law_id` INTEGER NOT NULL AUTO_INCREMENT,
    `law_name` VARCHAR(191) NOT NULL,
    `law_description` VARCHAR(191) NOT NULL,
    `written_date` DATETIME(3) NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`law_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Laws` ADD CONSTRAINT `Laws_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `LawCategory`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
