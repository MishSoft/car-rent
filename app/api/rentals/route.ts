import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in to complete your rental." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { carId, location } = body;

    if (!carId || !location?.pickup || !location?.dropoff) {
      return NextResponse.json(
        { error: "Missing required details for rental." },
        { status: 400 }
      );
    }

    // Fetch car for price calculation
    const car = await prisma.car.findUnique({ where: { id: carId } });
    if (!car) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    let days = 1;
    if (location.pickup.date && location.dropoff.date) {
      const diffTime = Math.abs(
        new Date(location.dropoff.date).getTime() - new Date(location.pickup.date).getTime()
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) days = diffDays;
    }
    const totalPrice = car.pricePerDay * days;

    const rental = await prisma.rental.create({
      data: {
        userId: session.user.id,
        carId,
        pickupLocation: location.pickup.location,
        pickupDate: new Date(location.pickup.date),
        pickupTime: location.pickup.time,
        dropoffLocation: location.dropoff.location,
        dropoffDate: new Date(location.dropoff.date),
        dropoffTime: location.dropoff.time,
        totalPrice,
      },
    });

    return NextResponse.json({ success: true, rental });
  } catch (error: any) {
    console.error("Rental creation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create rental" },
      { status: 500 }
    );
  }
}
