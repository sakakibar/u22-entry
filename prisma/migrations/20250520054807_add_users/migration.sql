/*
  Warnings:

  - You are about to drop the `Diary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Diary";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "userID" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "icon" TEXT,
    "bio" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "diaries" (
    "diaryID" TEXT NOT NULL PRIMARY KEY,
    "poster" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "score" TEXT,
    "weather" TEXT,
    "people" TEXT,
    "hobby" TEXT,
    "mood" TEXT,
    "content" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "diaries_poster_fkey" FOREIGN KEY ("poster") REFERENCES "users" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "musics" (
    "musicID" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "music_url" TEXT NOT NULL,
    "generation_type" TEXT,
    "parameters" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "musics_title_fkey" FOREIGN KEY ("title") REFERENCES "diaries" ("diaryID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_mail_key" ON "users"("mail");
