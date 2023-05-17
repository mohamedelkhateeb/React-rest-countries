import React from "react";

const FilterLang = ({ onSelect }) => {
  const selectHandler = (e) => {
    const lang = e.target.value;
    onSelect(lang);
  };

  return (
    <>
      <select
        className="p-3"
        style={{ cursor: "pointer" }}
        onChange={selectHandler}>
        <option>Filter Country By Language</option>
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
        <option value="spanish">Spanish</option>
        <option value="portuguese">Portuguese</option>
      </select>
    </>
  );
};

export default FilterLang;
