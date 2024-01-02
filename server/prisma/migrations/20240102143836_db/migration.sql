/*
  Warnings:

  - You are about to drop the column `planId` on the `Coach` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Coach" DROP CONSTRAINT "Coach_planId_fkey";

-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "planId";

-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "coachId" INTEGER;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;
