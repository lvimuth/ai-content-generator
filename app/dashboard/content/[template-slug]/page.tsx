import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import templates from "@/app/(data)/Templates";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5">
      {/* Form Section */}
      <FormSection selectedTemplate={selectedTemplate} />
      {/* Output Section */}
      <OutputSection />
    </div>
  );
}

export default CreateNewContent;