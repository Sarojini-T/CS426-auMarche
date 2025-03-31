import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuTab from './MenuTab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import LanguageSelection from './LanguageSelectionButton';
import NavSearchBar from './NavSearchBar';

// This component will return a navigation bar containing the website's name and logo
// a hamburger menu containing a link to the homepage and profile page, a search bar and
// a language selection button to set the language of the website
const NavBar = () => {
  return (
   
        <div className=" bg-[var(--color-primary)]">
        <Container fluid >
            {/* Grid layout implementation using React Bootstrap's grid layout to correctly
            position the components within the navbar */}
            <Row >
                <Col className="mt-3">
                <a href="/" className=" text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                xl:text-6xl absolute" style={{fontFamily : "var(--font-jomhuria)", textDecoration: 'none'}}>
                    🌺 auMarche </a> 
                </Col>
                <Col xs={6} className="flex justify-end p-0" >
                <MenuTab />
                </Col>
            </Row>
            <Row>
                <Col xs={6} className="mt-2 mb-4 flex justify-end">
                    <NavSearchBar />
                </Col>
                {/* <Col xs={6} className="mt-2 "><LanguageSelection/></Col> */}
            </Row>
        </Container>
        </div>
    
  );
}

export default NavBar;
