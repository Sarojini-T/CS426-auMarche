import React, { useContext, useEffect, useState } from "react";
import {
  SelectedLanguageContext,
  selectedLanguageContextType,
} from "../../components/Navbar/NavBarContexts";
import { profilePageText } from "../../data/translated-text-data";

import Title from "./components/Title";
import ProfilePic from "./assets/avatar.png";
import ListItem from "./components/ListItem";
import NavBar from "../../components/Navbar/NavBar";

import { ITEM_DATA } from "../../data/item-data";
import { LOCATION_DATA } from "../../data/location-data";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";

import { fetchUserLocation } from "./api";

const ProfilePage = () => {
  const [location, setLocation] = useState("");
  // Retrieve the selected language
  const { selectedLanguage }: selectedLanguageContextType = useContext(
    SelectedLanguageContext
  );
  // Find the corresponding data for the selected language
  const profileTitle =
    profilePageText[selectedLanguage as keyof typeof profilePageText]
      .profileTitle;
  const ingredientTitle =
    profilePageText[selectedLanguage as keyof typeof profilePageText]
      .savedIngredients;
  const locationTitle =
    profilePageText[selectedLanguage as keyof typeof profilePageText]
      .savedLocations;

  // Example of calling our API in the frontend
  // It accesses the location of a user "Sarah" in the userDB database
  useEffect(() => {
    fetchUserLocation()
      .then((location) => setLocation(location))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-[100vw] h-fit flex flex-col">
      <NavBar />
      <div className="flex flex-col w-[100%] mb-20">
        <div
          className={`${
            selectedLanguage == "JPN"
              ? "mt-20 md:mt-10 text-[40px] md:text-8xl"
              : "mt-3"
          } flex self-center md:self-start text-8xl font-jomhuria md:ml-7 md:text-6xl text-profileheader`}
        >
          {profileTitle}
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full items-center self-center mb-3 mt-20">
          <div className="flex items-center justify-center w-full">
            <img src={ProfilePic} />
          </div>
          <div className="flex w-full flex-col font-jomhuria ml-20 justify-center">
            <div className="flex flex-row h-21">
              <span className="text-primarygreen text-8xl md:text-9xl pr-3">
                John Doe
              </span>
              <button className="cursor-pointer hover:text-gray-400">
                <HiOutlinePencilSquare size={50} />
              </button>
            </div>
            <div className="flex flex-row items-center">
              <FaLocationDot size={25} className="mr-3" />
              <span className="text-profileheader pr-2 text-6xl pt-2">
                {location}
              </span>
              <button className="cursor-pointer hover:text-gray-400">
                <HiOutlinePencilSquare size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-fit bg-profilebg divide-x-2 divide-primarygreen">
        <div className="flex flex-col w-[100%] md:w-[50%]">
          <Title text={ingredientTitle} />
          <div className="flex flex-col self-center space-y-2 mt-6">
            {ITEM_DATA.map((item, index) =>
              item.haitianKreyolNames[0] !== "" ? (
                <ListItem text={item.haitianKreyolNames[0]} key={index} />
              ) : null
            )}
          </div>
        </div>
        <div className="flex flex-col w-[100%] md:w-[50%]">
          <Title text={locationTitle} />
          <div className="flex flex-col self-center space-y-2 mt-6">
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
