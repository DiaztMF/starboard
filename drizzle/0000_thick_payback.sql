CREATE SCHEMA "starboard";
--> statement-breakpoint
CREATE TABLE "starboard"."contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"submitted_at" timestamp DEFAULT now()
);
