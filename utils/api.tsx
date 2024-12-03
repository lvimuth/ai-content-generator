import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string;
}

export const fetchHistoryByEmail = async (emailAddress: string): Promise<HISTORY[]> => {
  if (!emailAddress) {
    throw new Error("Email address is required");
  }

  try {
    const historyList = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput?.createdBy, emailAddress))
      .orderBy(desc(AIOutput.id));

    return historyList;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw new Error("Failed to fetch history");
  }
};
