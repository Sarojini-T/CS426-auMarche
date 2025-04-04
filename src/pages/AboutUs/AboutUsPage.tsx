import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/Navbar/NavBar";
import MemberCard from "./MemberCard";

// This component returns the team's information 
const AboutUsPage : React.FC = () =>{
    return(
        <>
            <NavBar />
            <h1 className="text-center font-bold text-size-5xl mt-5 "
            style={{fontFamily: "var(--font-anek)", 
            color: "var(--color-primarygreen)"}}>Meet The Team</h1>
            <Container >
                <Row className="mb-4">
                    <Col md={6} >
                        <MemberCard name="Sarojini Torchon" />
                    </Col>
                    <Col md={6}>
                        <MemberCard name="Snigdha Thatikonda" />
                    </Col>
                </Row >
                <Row className="mb-4">
                    <Col>
                        <MemberCard name="Danny Cedrone" />
                    </Col>
                    <Col>
                    <MemberCard name="Sarah Jang" />
                    </Col>
                </Row>
            </Container>
        </>  
    );
}

export default AboutUsPage;