import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div>
      <label>
        Filter by category:
        <select name="category" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Bakery">Bakery</option>
          <option value="Dairy">Dairy</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
