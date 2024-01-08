/*
  Warnings:

  - You are about to drop the column `programExerciceId` on the `Program` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Program" DROP CONSTRAINT "Program_programExerciceId_fkey";

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "programExerciceId";

-- AlterTable
ALTER TABLE "ProgramExercice" ADD COLUMN     "programId" INTEGER;

-- AddForeignKey
ALTER TABLE "ProgramExercice" ADD CONSTRAINT "ProgramExercice_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;
