import React, { useState } from "react";
import { ITEM_DATA } from "../../data/item-data";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

const NavSearchBar: React.FC = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const data : string[] =  ITEM_DATA.flatMap(item => item.haitianKreyolNames);

  // When user clicks enter they will be redirected to the results page
  const navigateToPage = useNavigate();
  const handleClick = (ingredient : string) => {
      navigateToPage(`/results/${encodeURIComponent(ingredient)}`);
  }

  const handleCloseIconClick = () => {
    setShowList(() => false)
  }
  return (
    <div>
      <input
      type="text"
      className="w-[110%] p-2 bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search for an ingredient..."
      onFocus={() => setShowList(() => true)}
    />
    {showList && (
        <div className="bg-white border w-[110%]">
          <MdClose className="" onClick={handleCloseIconClick}></MdClose>
          <ul>
            {data.map((ingredient, index) => (
              <li key={index} onMouseDown={() => handleClick(ingredient)}>{ingredient}</li>
            ))}
          </ul>

        </div>
    )}
    </div>
    
  );
};

export default NavSearchBar;
