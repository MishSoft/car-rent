import "dotenv/config";
import { PrismaClient } from "./app/generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.log("NO DATABASE_URL");
    return;
  }
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool) as any;
  const prisma = new PrismaClient({ adapter });

  console.log("Checking user admin@morent.com...");
  const user = await prisma.user.findUnique({
    where: { email: "admin@morent.com" },
  });

  if (!user) {
    console.log("User not found!");
    return;
  }

  console.log("User found:", user.email, "role:", user.role);

  if (!user.password) {
    console.log("User has no password!");
    return;
  }

  const isValid = await bcrypt.compare("morent2026", user.password);
  console.log("Password valid:", isValid);
  
  await prisma.$disconnect();
}

main().catch(console.error);
