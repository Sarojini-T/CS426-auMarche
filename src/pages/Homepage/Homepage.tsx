const Homepage = () => {
    return(
      <>
        {/* Grid container for homepage that will contain the navbar on top,
        Image and website description side by side below it and a footer at
        the bottom */}
        <div className="grid">
            <div className="border col-span-10">Navbar </div>
            <div className="border col-start-1 col-span-6">Image </div>
            <div className="border col-start-7 col-span-4">Description</div>
            <div className="border col-start-1 col-span-10">Footer</div>
        </div> 
      </>
    );
};

export default Homepage;