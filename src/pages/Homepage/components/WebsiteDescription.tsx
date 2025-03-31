// This component will return the website description that will be displayed alongside the website image
const WebsiteDescription : React.FC = () => {
    return (
    <p className="text-left text-white ml-5 mr-5 text-sm sm:text-2xl md:text-3xl" 
    style={{fontFamily : "var(--font-jomhuria)"}}>
    Our goal for this project is to create a tool that promotes inclusivity and 
    makes every culture feel welcome and represented, and able to continue making 
    traditional food that helps them keep in touch with their cultural identity.</p>
    );
}

export default WebsiteDescription;