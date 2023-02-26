/*
  Warnings:

  - You are about to alter the column `name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(250)` to `VarChar(80)`.
  - You are about to alter the column `email` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(80)`.
  - You are about to alter the column `picture` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(300)`.
  - You are about to alter the column `token` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1200)`.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "picture" DROP NOT NULL,
ALTER COLUMN "picture" SET DATA TYPE VARCHAR(300),
ALTER COLUMN "token" SET DATA TYPE VARCHAR(1200),
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" DROP NOT NULL;
