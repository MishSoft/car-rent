import "dotenv/config";
import { PrismaClient } from "@/app/generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  var prisma: PrismaClient | undefined;
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// @ts-ignore
const adapter = new PrismaPg(pool);

export const prisma =
  global.prisma ||
  new PrismaClient({
    adapter,
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
