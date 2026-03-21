import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId: session.user.id },
      include: { car: true },
    });

    return NextResponse.json(favorites.map(f => f.car));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { carId } = await req.json();
    if (!carId) {
      return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
    }

    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_carId: {
          userId: session.user.id,
          carId: carId,
        },
      },
    });

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: { id: existingFavorite.id },
      });
      return NextResponse.json({ favorite: false });
    } else {
      await prisma.favorite.create({
        data: {
          userId: session.user.id,
          carId: carId,
        },
      });
      return NextResponse.json({ favorite: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
