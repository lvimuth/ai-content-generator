import Templates from "@/app/(data)/Templates";
import React from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-10">
      {Templates.map((item: TEMPLATE, index: number) => (
        <TemplateCard {...item} />
      ))}
    </div>
  );
}

export default TemplateList;
