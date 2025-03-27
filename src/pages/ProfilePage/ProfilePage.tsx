import Title from "./components/Title";
import { USER_DATA } from "../../data/user-data";
import ListItem from "./components/ListItem";

const ProfilePage = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="h-[70%]"></div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Title text="Saved Ingredients" />
          {USER_DATA[0].ingredients.map((ingredient, index) => (
            <ListItem key={index} text={ingredient} />
          ))}
        </div>
        <div className="flex flex-col">
          <Title text="Saved Locations" />
          {USER_DATA[0].locations.map((location, index) => (
            <ListItem key={index} text={location.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
