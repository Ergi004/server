-- CreateTable
CREATE TABLE `LawCategory` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_title` VARCHAR(191) NULL,
    `part_id` INTEGER NOT NULL,

    PRIMARY KEY (`category_id`)
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
ALTER TABLE `LawCategory` ADD CONSTRAINT `LawCategory_part_id_fkey` FOREIGN KEY (`part_id`) REFERENCES `Parts`(`part_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Law` ADD CONSTRAINT `Law_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `LawCategory`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
