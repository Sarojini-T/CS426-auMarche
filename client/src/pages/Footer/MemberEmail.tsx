// This component will return a link to a team member's email
type Props = {
    memberName : string,
    email : string
}
const MemberEmail : React.FC<Props> = ({memberName, email}) => {
    return(
        <a href={`mailto:${email}`} style={{fontFamily : "var(--font-anek)", color : "var(--color-primarygreen)"}}>{memberName}</a>  
    );
}

export default MemberEmail;