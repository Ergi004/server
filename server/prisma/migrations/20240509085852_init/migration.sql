/*
  Warnings:

  - You are about to drop the `Laws` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `LawCategory` DROP FOREIGN KEY `LawCategory_part_id_fkey`;

-- DropForeignKey
ALTER TABLE `Laws` DROP FOREIGN KEY `Laws_category_id_fkey`;

-- DropTable
DROP TABLE `Laws`;

-- DropTable
DROP TABLE `Parts`;

-- CreateTable
CREATE TABLE `Part` (
    `part_id` INTEGER NOT NULL AUTO_INCREMENT,
    `part_number` VARCHAR(191) NOT NULL,
    `part_title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`part_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Law` (
    `law_id` INTEGER NOT NULL AUTO_INCREMENT,
    `law_name` VARCHAR(191) NOT NULL,
    `law_description` VARCHAR(191) NOT NULL,
    `written_date` DATETIME(3) NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`law_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LawCategory` ADD CONSTRAINT `LawCategory_part_id_fkey` FOREIGN KEY (`part_id`) REFERENCES `Part`(`part_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Law` ADD CONSTRAINT `Law_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `LawCategory`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
