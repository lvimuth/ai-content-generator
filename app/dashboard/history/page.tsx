"use client";
import React, { useEffect, useState } from "react";
import { TEMPLATE } from "../_components/TemplateList";
import Templates from "@/app/(data)/Templates";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string;
}

function History() {
  const { user } = useUser();
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const emailAddress = user?.primaryEmailAddress?.emailAddress || "";
      if (!emailAddress) return;

      try {
        const result: HISTORY[] = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput?.createdBy, emailAddress))
          .orderBy(desc(AIOutput.id));
        setHistoryList(result);
        console.log("@@@", result);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [user]);

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find(
      (item) => item.slug == slug
    );
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <h2 className="text-gray-500">
        Search your previously generate AI Content
      </h2>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">Template</h2>
        <h2 className="col-span-2">AI Response</h2>
        <h2>Date</h2>
        <h2>Words</h2>
        <h2>Copy</h2>
      </div>

      {historyList.map((item: HISTORY, index: number) => (
        <div className="grid grid-cols-7 my-5 py-3 px-3" key={index}>
          <h2 className="col-span-2 flex gap-2 items-center">
            <Image
              alt=""
              src={GetTemplateName(item?.templateSlug)?.icon}
              width={25}
              height={25}
            />
            {GetTemplateName(item.templateSlug)?.name}
          </h2>
          <h2 className="col-span-2 line-clamp-2">{item?.aiResponse}</h2>
          <h2>{item?.createdAt}</h2>
          <h2>{item?.aiResponse?.length}</h2>
          <h2>
            <Button
              variant="ghost"
              className="text-primary"
              onClick={() =>
                navigator.clipboard.writeText(item.aiResponse || "")
              }
            >
              Copy
            </Button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default History;
