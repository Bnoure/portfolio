/*
  Warnings:

  - You are about to drop the column `projectSlug` on the `Session` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectSlug]` on the table `Reactions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectSlug]` on the table `Views` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "projectSlug";

-- CreateIndex
CREATE UNIQUE INDEX "Reactions_projectSlug_key" ON "Reactions"("projectSlug");

-- CreateIndex
CREATE UNIQUE INDEX "Views_projectSlug_key" ON "Views"("projectSlug");
