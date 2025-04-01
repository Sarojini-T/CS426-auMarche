// This will display a link to a page in the website
type Props = {
    route : string,
    page : string
}
const MenuLink: React.FC<Props> = ({route, page}) => {
    return (
        <a href={route} className="text-left text-white text-1xl" style={{fontFamily : "var(--font-jomhuria)", textDecoration: 'none'}}>{page}</a>
    );
}

export default MenuLink;