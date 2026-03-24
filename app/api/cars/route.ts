import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { CarType } from "@/app/generated/prisma/client";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const type = searchParams.get("type") as CarType | null;
    const location = searchParams.get("location");
    const search = searchParams.get("search");
    const available = searchParams.get("isAvailable");
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1"));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") ?? "20")),
    );
    const skip = (page - 1) * limit;

    const where: Record<string, any> = {};

    if (type) where.type = type;
    if (location) where.location = { contains: location, mode: "insensitive" };
    if (available !== null && available !== undefined) {
      where.isAvailable = available === "true";
    }
    if (search) {
      where.name = { contains: search, mode: "insensitive" };
    }

    const [cars, total] = await Promise.all([
      prisma.car.findMany({
        where,
        orderBy: { name: "asc" },
        skip,
        take: limit,
      }),
      prisma.car.count({ where }),
    ]);

    return NextResponse.json({
      cars,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error("Car fetch error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch cars" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized. Admin access required." }, { status: 401 });
    }

    const formData = await req.formData();

   for (const [key, value] of formData.entries()) {
     console.log(key, value);
   }

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
        rentalsCount: 0,
        isRecommended: formData.get("isRecommended") === "on",
        isPopular: formData.get("isPopular") === "on",
      },
    });

    return NextResponse.json({ success: true, car: newCar });

  } catch (error: any) {
    console.error("Car upload error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload car" }, { status: 500 });
  }
}
