import NavBar from "../../components/Navbar/NavBar";
import SelectedLanguageContextProvider from "../../components/SelectedLanguageProvider";
import homepageImg from "./assets/homepageImg.jpeg";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";
import WebsiteDescription from "./components/WebsiteDescription";


// This component will return the homepage of the Website which will contain the
// navigation Bar, the website tagline, an image with the website description 
// and a footer with the team members' names and emails
const Homepage : React.FC = () => {
    return(
      <>
        <SelectedLanguageContextProvider>
          {/* Grid container for homepage that will contain the navbar on top,
        Image and website description side by side below it and a footer at the bottom */}
        <div className="grid grid-cols-5 grid-rows-7 h-screen">
            {/* Container for the navigation bar */}
            <div className="col-span-full"> 
              <NavBar />
            </div>

            {/* Container for the website tagline */}
            <div className="col-span-full flex items-center justify-center">
              <Tagline />
            </div>

            <img src={homepageImg} className="col-span-3 row-span-5 h-full w-full"/>
            {/* Container for the website description */}
            <div className="col-span-2 row-span-5 flex items-center justify-center bg-[var(--color-primary)]">
              <WebsiteDescription />
            </div>
        </div> 
        <div className="col-span-full" ><Footer /></div>
        </SelectedLanguageContextProvider>
      </>
    );
};

export default Homepage;