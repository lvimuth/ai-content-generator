import React from "react";
import { TEMPLATE } from "../../_components/TemplateList";
import Image from "next/image";

interface PROPS {
  selectedTemplate: TEMPLATE;
}

function FormSection({ selectedTemplate }: PROPS) {
  return (
    <div className="p-5 shadow-lg border rounded-xl">
      <Image src={selectedTemplate?.icon} alt="" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary ">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
    </div>
  );
}

export default FormSection;
