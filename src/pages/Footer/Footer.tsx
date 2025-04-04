import { useContext } from "react";
import {
  SelectedLanguageContext,
  selectedLanguageContextType,
} from "../../components/Navbar/NavBarContexts";
import MemberEmail from "./MemberEmail";
import { homepageText } from "../../data/translated-text-data";

// This component will return the footer of the website containing the team members' emails and names
const Footer = () => {
  // Retrieve the selected language
  const { selectedLanguage }: selectedLanguageContextType = useContext(
    SelectedLanguageContext
  );

  // Find the corresponding data for the selected language
  const contactUS =
    homepageText[selectedLanguage as keyof typeof homepageText].contact;
  return (
    <>
      <div className="ml-3 mt-3 flex flex-col">
        <p
          className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold"
          style={{
            fontFamily: "var(--font-anek)",
            color: "var(--color-primarygreen)",
          }}
        >
          {contactUS}
        </p>
        <div className="flex gap-3">
          <MemberEmail memberName={"Sarah Jang"} />
          <MemberEmail memberName={"Sarojini Torchon"} />
          <MemberEmail memberName={"Danny Cedrone"} />
          <MemberEmail memberName={"Snigdha Thatikonda"} />
        </div>
      </div>
    </>
  );
};

export default Footer;
