import { NextResponse } from "next/server";
import { getDb } from "@/src/lib/db";
import { contacts } from "@/src/lib/schema";

export async function POST() {
  const db = getDb();
  if (!db) {
    return NextResponse.json(
      { error: "DATABASE_URL not configured" },
      { status: 500 }
    );
  }

  try {
    const existing = await db.select().from(contacts).limit(1);
    if (existing.length > 0) {
      return NextResponse.json({
        message: "Starboard database already has contacts. Skipped seeding.",
      });
    }

    await db.insert(contacts).values([
      {
        name: "Acme Corp",
        email: "alex@acme.corp",
        message: "We want to adopt Starboard for our engineering sprint tracking.",
      },
    ]);

    return NextResponse.json({
      success: true,
      message: "Starboard database seeded successfully.",
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to seed." },
    { status: 405 }
  );
}
