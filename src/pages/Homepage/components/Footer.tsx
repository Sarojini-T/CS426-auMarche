const Footer = () => {
    return(
        <>
            <div className="ml-3 mt-3 flex flex-col">
                <p className="text-3xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold" style={{fontFamily : "var(--font-anek)", color : "var(--color-primary)"}}>CONTACT US</p>
                <div className="flex gap-3">
                    <a href="mailto:ssjang@umass.edu" style={{fontFamily : "var(--font-anek)", color : "var(--color-primary)"}}>Sarah Jang</a>
                    <a href="mailto:jtorchon@umass.edu" style={{fontFamily : "var(--font-anek)", color : "var(--color-primary)"}}>Sarojini Torchon</a>
                    <a href="mailto:jcedrone@umass.edu" style={{fontFamily : "var(--font-anek)", color : "var(--color-primary)"}}>Danny Cedrone</a>
                    <a href="mailto:sthatikonda@umass.edu" style={{fontFamily : "var(--font-anek)", color : "var(--color-primary)"}}>Snigdha Thatikonda</a>  
                </div>
                
            </div>
        </>
    );
}

export default Footer;