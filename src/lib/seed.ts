import { getDb } from "./db";
import { contacts } from "./schema";

async function main() {
  const db = getDb();
  if (!db) {
    console.error("DATABASE_URL is not set.");
    process.exit(1);
  }

  console.log("Seeding Starboard database...");

  try {
    await db.insert(contacts).values({
      name: "Demo User",
      email: "demo@starboard.app",
      message: "Hello from Starboard project management!",
    });
    console.log("Seeded initial contact successfully.");
  } catch (error) {
    console.error("Error seeding Starboard:", error);
  }

  process.exit(0);
}

main();
