import Card from 'react-bootstrap/Card';
import { aboutUSText } from '../../data/translated-text-data';
import { SelectedLanguageContext, selectedLanguageContextType } from '../../components/Navbar/NavBarContexts';
import { useContext } from 'react';

// This component returns a bootstrap card containing a team member's name, year, major and background
type Props = {
    name : string,
}
const MemberCard : React.FC<Props> = ({name}) => {
     // Retrieve the selected language
     const {selectedLanguage} : selectedLanguageContextType = useContext(SelectedLanguageContext);

     // Find the corresponding data for the selected language
     const yearAndMajor = aboutUSText[selectedLanguage as keyof typeof aboutUSText][name as keyof typeof aboutUSText].yearAndMajor;
     const background = aboutUSText[selectedLanguage as keyof typeof aboutUSText][name as keyof typeof aboutUSText].background;
    return(
        <>
         <Card className="rounded-0 shadow-1xl" style={{width: "18rem;", backgroundColor: "var( --color-form)"}}>
            <Card.Body>
                <Card.Title style={{color: "white", fontFamily:"var(--font-anek)"}}>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontFamily:"var(--font-anek)"}}>{yearAndMajor}</Card.Subtitle>
                        <Card.Text style={{fontFamily:"var(--font-anek)"}}>{background}</Card.Text>       
                </Card.Body>
            </Card>
        </>
    );
}

export default MemberCard;