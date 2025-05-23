import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuTab from './MenuTab';
import LanguageSelection from './LanguageSelectionButton';
import NavSearchBar from './NavSearchBar';

// This component will return a navigation bar containing the website's name and logo
// a hamburger menu containing a link to the homepage and profile page, a search bar and
// a language selection button to set the language of the website
const NavBar = () => {
  return (
    <>
        <div className=" bg-[var(--color-primarygreen)]">
        <Container fluid >
            {/* Flex container for navbar components */}
            <div className='flex flex-col'>
                {/* Flex container for the website name and the hamburger menu icon */}
                <div className="flex justify-between">
                    <a href="/" className=" text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 
                    xl:text-6xl mt-3 " style={{fontFamily : "var(--font-jomhuria)", textDecoration: 'none'}}>
                        🌺 auMarche </a>
                    <MenuTab />
                </div>

    
                {/* Grid container to position the search bar in the middle and the language selection 
                button in the lower right corner.*/}
                <div className='grid grid-cols-3'>
                    <div className="col-start-1">  
                        <LanguageSelection/>   
                    </div>
                    <div className='col-start-2 justify-self-center'>
                        <NavSearchBar />
                    </div>   
                </div>   

            </div>
            </Container>
        </div>
    </>       
  );
}

export default NavBar;
