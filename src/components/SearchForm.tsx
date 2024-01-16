import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  return (
    <form action="#" onSubmit={(e) => e.preventDefault()} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={handleSearchTextChange}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
