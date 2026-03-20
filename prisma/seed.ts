// prisma/seed.ts
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const adminPassword = await bcrypt.hash("morent2026", 10);

  await prisma.user.upsert({
    where: { email: "admin@morent.com" },
    update: { password: adminPassword },
    create: {
      name: "Admin",
      email: "admin@morent.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
