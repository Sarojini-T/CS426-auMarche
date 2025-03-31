import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

// This component will initially display a hamburger menu icon,
// when clicked by the user it will disappear and a dropdown menu 
// will be displayed with the pages in the website and a close icon in the upper left corner
export const Menu : React.FC = () => {
    // State that will help conditionally render the appropriate icon
    const [currIcon, setIcon] = useState<string>("menu");
    
    // Event handler function that will take in a string refer to the icon clicked as an argument
    // and sets the state accordingly
    const handleClick = (icon : string) => {
        // If the menu icon was clicked, then set the state to be the "close" icon 
        if(icon == "menu"){
            setIcon(() => "close")
         } 
         // If the close icon was clicked, set the state to be the menu icon
         else{
            setIcon(() => "menu");
         } 
    }
    
    // If the user clicked to open the menu, display dropdown menu with links to other pages
    if(currIcon == "close"){
        return (
            <div className="flex flex-col absolute bg-[var(--color-secondary)] sm:w-[130px] md:w-[150px] lg:w-[175px] xl:w-[230px] 
            sm-h-[250px] md:h-[192px] lg:h-[192px] xl:h-[212px]">
                <MdClose className="text-4xl" onClick={() => handleClick("close")} color="white"/>
                {/* Container to Center the page links */}
                <div className="flex flex-col items-center justify-center">
                    <a href="/" className="text-left text-white text-sm xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl" style={{fontFamily : "var(--font-jomhuria)", textDecoration: 'none'}}>Home</a> 
                    <a href="/profile" className="text-left text-white text-sm xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl" style={{fontFamily : "var(--font-jomhuria)", textDecoration: 'none'}}>Profile</a>  
                </div>
                     
            </div>
        )
    }// if they closed the dropdown menu, display the hamburger menu
    else{
        return <IoMenuSharp className="text-4xl" onClick={() => handleClick("menu")} color="white"/> 
    }
}

export default Menu;