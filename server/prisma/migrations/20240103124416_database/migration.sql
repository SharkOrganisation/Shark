/*
  Warnings:

  - You are about to drop the column `otp` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `otpExpire` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `otp` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `otpExpire` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `otp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otpExpire` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "otp",
DROP COLUMN "otpExpire";

-- AlterTable
ALTER TABLE "Gym" DROP COLUMN "otp",
DROP COLUMN "otpExpire";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "otp",
DROP COLUMN "otpExpire";
