import React from "react";
import SearchSection from "./_components/SearchSection";
import TemplateList from "./_components/TemplateList";

function Dashboard() {
  return (
    <div>
      {/* Search Section */}
      <SearchSection />

      {/* Template List Section */}
      <TemplateList />
    </div>
  );
}

export default Dashboard;
