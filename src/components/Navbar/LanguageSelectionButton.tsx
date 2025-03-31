import Dropdown from 'react-bootstrap/Dropdown';

// This component will return a dropdown menu allowing users to select their preferred language
export const LanguageSelectionButton = () => {
    return(
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className=" bg-white w-40" 
        style={{color : "var(--color-primary)", fontFamily: "var(--font-anek)" , borderRadius : "0px"}}>
          ENG
        </Dropdown.Toggle>
  
        <Dropdown.Menu   style={{ borderRadius : "0px"}}>
          <Dropdown.Item className="hover: bg-[var(--color-secondary)]" style={{color : "var(--color-primary)" , fontFamily: "var(--font-anek)"}}>ENG</Dropdown.Item>
          <Dropdown.Item style={{color : "var(--color-primary)", fontFamily: "var(--font-anek)"}}>HT</Dropdown.Item>
          <Dropdown.Item style={{color : "var(--color-primary)" , fontFamily: "var(--font-anek)"}}>JP</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  
    );
}

export default LanguageSelectionButton;
