import Title from "./components/Title";
import ProfilePic from "./assets/avatar.png";
import { ITEM_DATA } from "../../data/item-data";
import { LOCATION_DATA } from "../../data/location-data";
import ListItem from "./components/ListItem";

const ProfilePage = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="h-[70%] flex flex-col">
        <h1 className="font-jomhuria text-4xl">Profile</h1>
        <div className="flex flex-row justify-center">
          <div>
            <img src={ProfilePic} />
          </div>
          <div className="flex flex-col font-jomhuria">
            <div>
              <h1 className="">John Doe</h1>
              <button></button>
            </div>
            <div>
              <h1>Boston, MA</h1>
              <button></button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[100%]">
        <div className="flex flex-col justify-evenly">
          <Title text="Saved Ingredients" />
          {ITEM_DATA.map((item, index) => (
            <ListItem text={item.haitianKreyolNames[0]} key={index} />
          ))}
        </div>
        <div className="flex flex-col">
          <Title text="Saved Locations" />
          {LOCATION_DATA.map((location, index) => (
            <ListItem text={location.name} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
