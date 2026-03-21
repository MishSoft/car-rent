import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { CarType } from "@/app/generated/prisma/client";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized. Admin access required." }, { status: 401 });
    }

    const formData = await req.formData();
    
    // Extract text fields
    const name = formData.get("name") as string;
    const pricePerDay = parseFloat(formData.get("pricePerDay") as string);
    const fuelCapacity = parseFloat(formData.get("fuelCapacity") as string);
    const type = formData.get("type") as CarType;
    const transmission = formData.get("transmission") as string;
    const passengerLimit = parseInt(formData.get("passengerLimit") as string);
    const location = (formData.get("location") as string) || "Tbilisi";

    // Extract image file
    const file = formData.get("image") as File;
    if (!file) {
      return NextResponse.json({ error: "Image file is required." }, { status: 400 });
    }

    // Process image saving (local)
    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_"); // sanitize limits
    const filename = `${Date.now()}-${originalName}`;
    const uploadDir = path.join(process.cwd(), "public/uploads");

    // Try creating the directory if it doesn't exist
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (err) {
      // Ignored if it already exists
    }

    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);
    const imageUrl = `/uploads/${filename}`;

    // Add to DB
    const newCar = await prisma.car.create({
      data: {
        name,
        pricePerDay,
        fuelCapacity,
        type,
        transmission,
        passengerLimit,
        location,
        imageUrl,
      },
    });

    return NextResponse.json({ success: true, car: newCar });

  } catch (error: any) {
    console.error("Car upload error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload car" }, { status: 500 });
  }
}
