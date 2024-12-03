import React from "react";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string;
}

function History() {
  return <div>History</div>;
}

export default History;
