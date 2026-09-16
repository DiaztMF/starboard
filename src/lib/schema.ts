import { pgSchema, serial, text, timestamp } from "drizzle-orm/pg-core";

export const starboardSchema = pgSchema("starboard");

export const contacts = starboardSchema.table("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
