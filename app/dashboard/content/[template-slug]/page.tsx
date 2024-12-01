"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
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
  const GenerateAIContent = (formData: any) => {};
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
        />
        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
