import React, { useState } from "react";
import SearchBarDropdown from "./SearchBarDropdown";
import { UserValueContext } from "./NavBarContexts";

// This component will return an global search bar that will be store in the navBar and accessible
// to all other pages
const NavSearchBar: React.FC = () => {
  // State to set the value of the input that will act as a search bar
  const [value, setValue] = useState<string>("");

  return (
    <>
      <UserValueContext.Provider value={{ value, setValue }}>
        <div className="mb-2">
          <input
            type="text"
            className="p-2 bg-white border-1 border-gray-400 focus:outline-[var(--color-secondary)] focus:text-[var(--color-primary)] 
        w-10em xs:w-[15em] sm:w-[20em] md:w-[25em] xl:w-[30em] 2xl:w-[40em] h-8"
            style={{ fontFamily: "var( --font-anek)", color: "#808080" }}
            placeholder="Search for an ingredient..."
            value={value}
            onChange={(event) => setValue(() => event.target.value)} // Update the value state to the word the user is typing currently
            onBlur={() => setTimeout(() => setValue(() => ""), 100)} //Close the dropdown when user clicks outside of the search bar
          />
          <SearchBarDropdown />
        </div>
      </UserValueContext.Provider>
    </>
  );
};

export default NavSearchBar;
