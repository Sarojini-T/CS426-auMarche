import MemberEmail from "./MemberEmail";

const Footer = () => {
    return(
        <>
            <div className="ml-3 mt-3 flex flex-col">
                <p className="text-3xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold" style={{fontFamily : "var(--font-anek)", color : "var(--color-primary)"}}>CONTACT US</p>
                <div className="flex gap-3">
                    <MemberEmail memberName={"Sarah Jang"} />
                    <MemberEmail memberName={"Sarojini Torchon"} />
                    <MemberEmail memberName={"Danny Cedrone"} />
                    <MemberEmail memberName={"Snigdha Thatikonda"} />
                </div>
                
            </div>
        </>
    );
}

export default Footer;