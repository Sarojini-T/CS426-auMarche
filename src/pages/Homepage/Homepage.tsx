import homepageImg from "./assets/homepageImg.jpeg";

const Homepage = () => {
    return(
      <>
        {/* Grid container for homepage that will contain the navbar on top,
        Image and website description side by side below it and a footer at
        the bottom */}
        <div className="grid grid-cols-5 grid-rows-6 h-screen">
            <div className="col-span-full"> Navbar </div>
            <img src={homepageImg} className="col-span-3 row-span-4  h-full w-full"/>
            <div className="col-span-2 row-span-4 flex items-center justify-center  bg-[var(--color-primary)]">
              <p className="text-left text-white  ml-5 mr-5 text-xl sm:text-2xl md:text-3xl" style={{fontFamily : "var(--font-jomhuria)"}}>Our goal for this project is to create a tool that promotes inclusivity and 
                makes every culture feel welcome and represented, and able to continue making 
                traditional food that helps them keep in touch with their cultural identity.</p>
            </div>
            <div className="col-span-full">Footer</div>
        </div> 
      </>
    );
};

export default Homepage;