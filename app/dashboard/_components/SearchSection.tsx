import { Search } from "lucide-react";
import React from "react";

function SearchSection() {
  return (
    <div className="p-10 bg-gradient-to-br from-gradient1 via-gradient2 to-gradient3 flex justify-center text-white m-3 rounded-lg flex-col items-center">
      <h2 className="text-3xl ">Browse All Template </h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-lg bg-white my-5 w-full lg:w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
