/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");
