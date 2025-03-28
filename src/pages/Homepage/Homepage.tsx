import homepageImg from "./assets/homepageImg.jpeg";

const Homepage = () => {
    return(
      <>
        {/* Grid container for homepage that will contain the navbar on top,
        Image and website description side by side below it and a footer at
        the bottom */}
        <div className="grid grid-cols-2 grid-rows-3 h-full">
            <div className="border col-span-2">Navbar </div>
            <img src={homepageImg} />
            <div className="border">Description</div>
            <div className="border col-span-2">Footer</div>
        </div> 
      </>
    );
};

export default Homepage;