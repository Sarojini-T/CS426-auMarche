import Title from "./components/Title";
import ProfilePic from "./assets/avatar.png";
import { ITEM_DATA } from "../../data/item-data";
import { LOCATION_DATA } from "../../data/location-data";
import ListItem from "./components/ListItem";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";

const ProfilePage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      <div className="flex flex-col mb-20">
        <div className="font-jomhuria text-6xl text-profileheader ml-7">
          Profile
        </div>
        <div className="flex flex-row justify-center w-[70%] self-center mb-3 mt-20">
          <div className="flex items-center">
            <img src={ProfilePic} />
          </div>
          <div className="flex flex-col font-jomhuria ml-20 justify-center">
            <div className="flex flex-row h-21">
              <span className="text-primary text-9xl pr-3">John Doe</span>
              <button className="cursor-pointer hover:text-gray-400 pt-8">
                <HiOutlinePencilSquare size={50} />
              </button>
            </div>
            <div className="flex flex-row items-center">
              <FaLocationDot size={25} className="mr-3" />
              <span className="text-profileheader pr-2 text-6xl pt-2">
                Boston, MA
              </span>
              <button className="cursor-pointer hover:text-gray-400">
                <HiOutlinePencilSquare size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[100%] justify-center bg-profilebg divide-x-2 divide-primary">
        <div className="flex flex-col w-[50%]">
          <div className="flex flex-col self-center space-y-2">
            <Title text="Saved Ingredients" />
            {ITEM_DATA.map((item, index) =>
              item.haitianKreyolNames[0] !== "" ? (
                <ListItem text={item.haitianKreyolNames[0]} key={index} />
              ) : null
            )}
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="flex flex-col self-center space-y-2">
            <Title text="Saved Locations" />
            {LOCATION_DATA.map((location, index) => (
              <ListItem text={location.name} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
