"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>();
  const { user } = useUser();
  const router = useRouter();
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );
  const selectedTemplate: TEMPLATE | undefined = templates?.find(
    (item) => item.slug == props?.params["template-slug"]
  );

  if (!selectedTemplate) {
    return (
      <div>
        <h2>Template not found</h2>
        <p>The requested template does not exist or is unavailable.</p>
      </div>
    );
  }
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      router.push("/dashboard/billing");
      console.log("Please upgrade the plan");
      return;
    }
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession?.sendMessage(FinalAIPrompt);

    setAIOutput(await result?.response.text());
    await SaveInDB(
      JSON.stringify(formData),
      selectedTemplate?.slug,
      result?.response.text()
    );
    setLoading(false);
    setUpdateCreditUsage(Date.now());
  };

  const SaveInDB = async (formData: any, slug: any, aiOutput: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
    console.log("Data saved in DB", result);
  };
  return (
    <div className="p-4">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
