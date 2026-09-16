import { getDb } from "./db";
import { contacts, type NewContact } from "./schema";

export async function createContact(data: NewContact) {
  const db = getDb();
  if (!db) {
    console.warn("[Starboard DB] DATABASE_URL not configured. Simulating contact creation.");
    return {
      id: Math.floor(Math.random() * 1000) + 1,
      name: data.name,
      email: data.email,
      message: data.message,
      submittedAt: new Date(),
    };
  }

  try {
    const [inserted] = await db.insert(contacts).values(data).returning();
    return inserted;
  } catch (error) {
    console.error("[Starboard DB] Error creating contact in DB:", error);
    // Graceful fallback
    return {
      id: 0,
      name: data.name,
      email: data.email,
      message: data.message,
      submittedAt: new Date(),
    };
  }
}
