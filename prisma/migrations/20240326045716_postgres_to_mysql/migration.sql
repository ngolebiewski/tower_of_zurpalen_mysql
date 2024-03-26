-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(40) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `isBanned` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `character_id` INTEGER NULL,
    `phone` INTEGER NULL,
    `email` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_character_id_key`(`character_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `gender` VARCHAR(20) NOT NULL,
    `character_class` VARCHAR(30) NOT NULL,
    `currentHP` INTEGER NOT NULL,
    `maxHP` INTEGER NOT NULL,
    `xp` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,
    `graphicUrl` VARCHAR(191) NOT NULL,
    `gold` INTEGER NOT NULL,
    `head_gear1` INTEGER NULL DEFAULT 7,
    `left_hand_gear2` INTEGER NULL DEFAULT 7,
    `right_hand_gear3` INTEGER NULL DEFAULT 7,
    `foot_gear4` INTEGER NULL DEFAULT 7,
    `chest_gear5` INTEGER NULL DEFAULT 7,
    `backpack1` INTEGER NOT NULL DEFAULT 7,
    `backpack2` INTEGER NOT NULL DEFAULT 7,
    `backpack3` INTEGER NOT NULL DEFAULT 7,
    `backpack4` INTEGER NOT NULL DEFAULT 7,
    `backpack5` INTEGER NOT NULL DEFAULT 7,
    `backpack6` INTEGER NOT NULL DEFAULT 7,
    `backpack7` INTEGER NOT NULL DEFAULT 7,
    `backpack8` INTEGER NOT NULL DEFAULT 7,
    `base_attack` INTEGER NOT NULL,
    `base_armor` INTEGER NOT NULL,
    `base_speed` INTEGER NOT NULL,
    `magic_points` INTEGER NULL,
    `current_mp` INTEGER NULL,
    `isNPC` BOOLEAN NOT NULL DEFAULT false,
    `location_coordinates` VARCHAR(191) NULL,
    `stagescompleted` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character_Gear` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `character_id` INTEGER NOT NULL,
    `gear_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gear` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `attack` INTEGER NOT NULL,
    `armor` INTEGER NOT NULL,
    `isTwoHanded` BOOLEAN NOT NULL,
    `equip_location` INTEGER NOT NULL,
    `preferred_class` VARCHAR(191) NOT NULL,
    `health_bonus` INTEGER NOT NULL,
    `armor_bonus` INTEGER NOT NULL,
    `attack_bonus` INTEGER NOT NULL,
    `speed_bonus` INTEGER NOT NULL,
    `graphicUrl` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character_Class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `beginning_attack` INTEGER NOT NULL,
    `beginning_armor` INTEGER NOT NULL,
    `beginning_speed` INTEGER NOT NULL,
    `beginning_hp` INTEGER NOT NULL,
    `graphicUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Monster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `base_attack` INTEGER NOT NULL,
    `base_armor` INTEGER NOT NULL,
    `base_speed` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,
    `attack_name` VARCHAR(191) NOT NULL,
    `graphicUrl` VARCHAR(191) NOT NULL,
    `xp_base_value` INTEGER NOT NULL,
    `maxHP` INTEGER NOT NULL,
    `currentHP` INTEGER NOT NULL,
    `isBoss` BOOLEAN NOT NULL DEFAULT false,
    `loot_value` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Spells` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `spell_name` VARCHAR(40) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `health_bonus` INTEGER NOT NULL,
    `armor_bonus` INTEGER NOT NULL,
    `attack_bonus` INTEGER NOT NULL,
    `speed_bonus` INTEGER NOT NULL,
    `graphicUrl` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_character_id_fkey` FOREIGN KEY (`character_id`) REFERENCES `Character`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character_Gear` ADD CONSTRAINT `Character_Gear_character_id_fkey` FOREIGN KEY (`character_id`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character_Gear` ADD CONSTRAINT `Character_Gear_gear_id_fkey` FOREIGN KEY (`gear_id`) REFERENCES `Gear`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
