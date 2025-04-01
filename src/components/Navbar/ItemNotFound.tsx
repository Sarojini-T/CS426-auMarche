// This component will be displayed when an item is not found and we cannot generate 
// suggestions even when input is misspelled
type Props = {
    foundMatch: boolean,
    isMisspelled : boolean
}

// It will take as props two states : one tracking if a value has been found in the searchBarData
// and the other tracking if the value has been found in the misspelledDataArr
const ItemNotFound : React.FC<Props> = ({foundMatch, isMisspelled}) => {
    console.log("isMisspelled",isMisspelled)
    console.log("foundMatch",foundMatch)
    return isMisspelled == false && foundMatch == false && (
        <div className="flex items-center justify-center mt-3" style={{fontFamily : "var( --font-anek)", color : "var(--color-primary)"}}>
            <p>Item not found</p>
        </div>
    );
}

export default ItemNotFound;