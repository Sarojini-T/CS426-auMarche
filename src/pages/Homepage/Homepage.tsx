import NavBar from "../../components/Navbar/NavBar";
import homepageImg from "./assets/homepageImg.jpeg";
import Tagline from "./components/Tagline";
import WebsiteDescription from "./components/WebsiteDescription";

// This component will return the homepage of the Website which will contain the
// navigation Bar, the website tagline, an image along with the website description 
// and a footer with the team members' names and emails
const Homepage : React.FC = () => {
    return(
      <>
        {/* Flex container for homepage that will contain the navbar on top,
        Image and website description side by side below it and a footer at the bottom */}
        <div className="flex flex-col h-full">
            <NavBar />

            {/* Container for the tagline to center and properly position it on page */}
            <div className="flex items-center justify-center mt-10 mb-5"> 
              <Tagline />
            </div> 
  
          {/* Container positioning the website image and description side by side */}
          <div className="flex flex-col items-center justify-center h-screen sm:flex-col md:flex-row lg:flex-row xl:flex-row">
            <img src={homepageImg} className="h-[60%] w-full xs:w-full md:w-[70%] lg:w-[60%] xl:w-[65%] 2xl:w[60%]
              xs:h-[50%] md:h-full lg:h-full xl:h-full 2xl:h-full"/>

            {/* Container for website description */}
            <div className="bg-[var(--color-primary)] h-full w-full xs:w-full md:w-[30%] lg:w-[40%] xl:w-[35%] 
            xs:h-[50%] md:h-full lg:h-full xl:h-full 
            flex items-center justify center">
              <WebsiteDescription />
            </div>
          </div>
        </div> 
      </>
    );
};

export default Homepage;