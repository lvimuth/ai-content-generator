import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql",
    schema: "./utils/schema.tsx",
    dbCredentials: {
        url: "postgresql://neondb_owner:QoEeVgup91YR@ep-dry-shadow-a521icab.us-east-2.aws.neon.tech/neondb?sslmode=require",
    }
});