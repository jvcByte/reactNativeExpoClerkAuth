import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/index";

// Check if we're in a server environment
const isServer = typeof window === 'undefined';

if (!isServer) {
  throw new Error('Auth should only be used on the server side');
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
        provider: "pg", 
  }),
});