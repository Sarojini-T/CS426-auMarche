// This component will return a link to a team member's email
type Props = {
    memberName : string;
}
const MemberEmail : React.FC<Props> = ({memberName}) => {
    return(
        <a href="mailto:sthatikonda@umass.edu" style={{fontFamily : "var(--font-anek)", color : "var(--color-primary)"}}>{memberName}</a>  
    );
}

export default MemberEmail;