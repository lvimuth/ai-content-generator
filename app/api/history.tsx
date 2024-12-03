import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ensure it's a GET request
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.query;

  // Validate the email query parameter
  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Invalid or missing email parameter" });
  }

  try {
    // Query the database for history entries
    const history = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput?.createdBy, email))
      .orderBy(desc(AIOutput.id));

    res.status(200).json(history); // Send the history as a response
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
