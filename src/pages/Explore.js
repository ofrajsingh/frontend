import React, { useState } from "react";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={() => alert(`Searching for: ${searchTerm}`)}>
        Search
      </button>
    </div>
  );
};

export default Explore;
