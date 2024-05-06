-- CreateTable
CREATE TABLE "Views" (
    "slug" SERIAL NOT NULL,
    "count" BIGINT NOT NULL DEFAULT 1,
    "projectSlug" TEXT NOT NULL,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Reactions" (
    "slug" SERIAL NOT NULL,
    "likes" BIGINT NOT NULL DEFAULT 1,
    "projectSlug" TEXT NOT NULL,

    CONSTRAINT "Reactions_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,
    "projectSlug" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);
