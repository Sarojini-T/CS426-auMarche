import { useState } from "react";
import { ITEM_DATA, ItemData } from "../../data/item-data";
import Title from "../ProfilePage/components/Title";
import SearchBar from "./components/SearchBar";
import { FaArrowLeft } from "react-icons/fa";

const SuggestionsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const filteredItems = ITEM_DATA.filter(
    (item) =>
      item.haitianKreyolNames.length > 0 &&
      item.haitianKreyolNames[0].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (item: ItemData) => {
    setSelectedItem(item);
    setSearchTerm("");
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center p-6">
        <button className="absolute top-4 left-4 p-2 bg-gray-200 rounded-full">
        <FaArrowLeft />
      </button>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {searchTerm && (
        <div className="absolute bg-white shadow-lg w-[60%] mt-2 rounded-lg">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(item)}
            >
              {item.haitianKreyolNames[0] || item.englishNames[0]}
            </div>
          ))}
        </div>
      )}

      {selectedItem && (
        <div className="mt-10 p-6 bg-gray-100 w-[60%] rounded-lg shadow-md">
          <Title text={selectedItem.haitianKreyolNames[0] || selectedItem.englishNames[0]} />
          <p className="text-gray-600 text-lg text-center">English Name: {selectedItem.englishNames.join(", ")}</p>
          <img src={selectedItem.image} alt={selectedItem.englishNames[0]} className="w-64 h-64 mt-4 object-cover rounded-lg mx-auto" />
          <div className="mt-6 p-4 bg-[#D7E6D3] rounded-lg shadow">
            <h3 className="text-xl text-center font-bold">Where have you seen this item before?</h3>
            {!submitted ? (
              <div className="mt-4 text-center">
                <textarea className="w-full p-2 border rounded-lg bg-gray-100" rows={3} placeholder="Enter your suggestion here..." />
                <button
                  className="mt-3 px-4 py-2 bg-[#709C67] text-white rounded-lg hover:bg-[#B6D7B0]"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            ) : (
              <p className="mt-4 text-center">Thanks! We'll review your submission soon.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionsPage;