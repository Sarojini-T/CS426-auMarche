EACH ENTRY SHOULD HAVE:
Component name and purpose.
Props and expected data types.
Example usage within the application.
Screenshots or live previews.
## Shared Components
Name: Navbar\
Purpose: This component allows the user to search for an ingredient, change the language of the website (English, Japanese, or Haitian Creole), and navigate to home, their profile, or the location suggestions page.\
Props and Expected Data Types: This component does not receive any props.\
Example Usage within the Application: User types an ingredient (ex: Malanga), user clicks on populated result in the dropdown, results page for Malanga renders.
```
const Homepage : React.FC = () => {
    return(
      <>
        <div className="flex flex-col h-full">
            <NavBar />
            {/* Additional code */}
        </div> 
      </>
    );
};

export default Homepage;
```
Screenshots or Live Previews: <img width="440" alt="Screenshot 2025-04-04 at 4 05 07 PM" src="https://github.com/user-attachments/assets/469df363-4d4f-46f5-8aec-d3c71ddad49a" />
### Navbar Sub-Components
Name: NavSearchBar\
Purpose: // This component will return an global search bar that will be stored in the navBar and accessible to all other pages\
Props and Expected Data Types: This component does not receive any props.\
Example Usage within the Application: User starts typing "Malanga" and it populates the search bar div.
```
const NavBar = () => {
  return (
    <>
        <div>
        <Container fluid >
            {/* Flex container for navbar components */}
                {/* Flex container for the website name and the hamburger menu icon */}
                {/* Flex container for the navbar and the language selection button */}
                <div className="flex items-center justify-center">
                    <NavSearchBar />
                    <LanguageSelection/>
                </div>
            </Container>
        </div>
    </>       
  );
}

export default NavBar;
```
Screenshots or Live Previews:<img width="376" alt="Screenshot 2025-04-04 at 4 11 36 PM" src="https://github.com/user-attachments/assets/45d6d503-176d-428e-93e0-9b307690ff0a" />
Name: SearchBarDropdown\
Purpose: This component will return a dropdown containing a list of ingredients being dynamically displayed based on what the user is inputting in the search bar\
Props and Expected Data Types: This component does not receive any props.\
Example Usage within the Application: User misspells an ingredient, the search bar will suggest the proper spelling.
```
const NavSearchBar: React.FC = () => {
  return (
    <>
        {/* NavSearchBar input code based on user value context */}
          <SearchBarDropdown />
    </>
  );
};

export default NavSearchBar;
```
Screenshots or Live Previews: <img width="369" alt="Screenshot 2025-04-04 at 4 08 53 PM" src="https://github.com/user-attachments/assets/c671591c-55f7-49e8-a70a-40dbcfa4f316" />
Name: NavBarContexts\
Purpose: This component defines the context for what the user is typing in the search bar and the selected language.\
Props and Expected Data Types: This component does not receive any props.\
Example Usage within the Application: Used in the SearchBarDropdown to help populate the dropdown based on what the user is typing.\ \
Name: MenuTab\
Purpose: This component will initially display a hamburger menu icon, when clicked by the user it will disappear and a dropdown menu will be displayed with the pages in the website and a close icon in the upper left corner\
Props and Expected Data Types: This component does not receive any props.\
Example Usage within the Application: User clicks on hamburger menu, clicks profile page, redirects them to profile page.
```
const NavBar = () => {
  return (
    <>
        <div>
        <Container >
        {/* Additional Code */}
                    <MenuTab />
        {/* Additional Code */}
        </Container>
        </div>
    </>       
  );
}

export default NavBar;
```
Screenshots or Live Previews:<img width="167" alt="Screenshot 2025-04-04 at 4 17 51 PM" src="https://github.com/user-attachments/assets/766a4476-7555-4d72-acf7-357f7860d9d5" />
\
Name: MatchedIngredients\
Purpose: This component will return a list of ingredients that match the first few letters that the user is typing in the search bar => ie: autocomplete. Pressing enter on the ingredient will take them to the ingredient result page.\
Props and Expected Data Types: This component accepts booleans foundMatch and setMatch as props. \
Example Usage within the Application: A user starts typing "b" and the searchbar dropdown suggests "Bean Sprouts" and "Black Fungus".
```
const SearchBarDropdown: React.FC = () => {
  return (
      <div>
        <MatchedIngredients foundMatch={foundMatch} setMatch={setMatch} />
        {/* Additional code */}
      </div>
    );
};

export default SearchBarDropdown;
```
Screenshots or Live Previews: <img width="374" alt="Screenshot 2025-04-04 at 4 24 36 PM" src="https://github.com/user-attachments/assets/5fc1b1fb-b489-4623-8b6d-f1559245ee7b" />

Name: LanguageSelectionItem\
Purpose: This component returns a language selection option in the language selection menu.\
Props and Expected Data Types: This component receives a string, languageCode.\
Example Usage within the Application: User clicks the language selection menu, the menu populates with the options returned by this component (currently, there are 3 options (ENG, HT, JPN)\
```
export const LanguageSelectionButton : React.FC = () => {
  {/* Additional code */}
    return(
        <Dropdown>
        {/* Additional code */}
        <Dropdown.Menu>
          <LanguageSelectionItem languageCode="ENG"/>
          <LanguageSelectionItem languageCode="HT"/>
          <LanguageSelectionItem languageCode="JPN"/>
        </Dropdown.Menu>
      </Dropdown>  
    );
}

export default LanguageSelectionButton;
```
Screenshots or Live Previews: <img width="50" alt="Screenshot 2025-04-04 at 4 28 04 PM" src="https://github.com/user-attachments/assets/68ba92d0-6727-4f24-9d90-f461b42aff30" />

Name: LanguageSelectionButton\
Purpose: This component will return a dropdown menu allowing users to select their preferred language within the navbar.\
Props and Expected Data Types: This component does not receive any props.\
Example Usage within the Application: The user clicks the dropdown menu next to the search bar, and options for different languages populate (ENG, HT, JPN)
```
const NavBar = () => {
  return (
    <>
        <div>
            <Container >
                {/* Flex container for navbar components */}
                <div>
                {/* Additional code */}
                    <div>
                        <NavSearchBar />
                        <LanguageSelection/>
                    </div>
                </div>
            </Container>
        </div>
    </>       
  );
}

export default NavBar;
```
Screenshots or Live Previews: <img width="50" alt="Screenshot 2025-04-04 at 4 28 04 PM" src="https://github.com/user-attachments/assets/68ba92d0-6727-4f24-9d90-f461b42aff30" />

Name: ItemNotFound\
Purpose: This component will be displayed in the search bar dropdown when an item is not found in our item data file & it is also not in our misspelled data file\
Props and Expected Data Types: This component accepts two booleans, foundMatch, which tracks if a value has been found in the searchBarData and isMisspelled, which tracks if the value has been found in misspelledDataArr. \
Example Usage within the Application: User types in an ingredient not in our database, say "ewakroawer", searchbar dropdown will display "Item not found".
```
const SearchBarDropdown: React.FC = () => {
  return  (
      <div>
        {/* Additional Code */}
        <ItemNotFound foundMatch={foundMatch} isMisspelled={isMisspelled} />
      </div>
  );
};

export default SearchBarDropdown;
```
Screenshots or Live Previews: <img width="368" alt="Screenshot 2025-04-04 at 4 32 40 PM" src="https://github.com/user-attachments/assets/bbf611d9-56e5-4a20-951f-6c8a187d2c27" />

Name: DisplaySearchBarSuggestions\
Purpose: This component will return a list of suggested items when the user misspells a word.\
Props and Expected Data Types: It takes as input 2 props, setAsMisspelled, which updates isMisspelled state based on if we are able to find the value in the misspelledDataArr or not and foundMatch, which conditionally displays the component.
\
Example Usage within the Application: User starts typing "ash" when they meant to type Anatō, the dropdown titles itself "Did you mean..." then displays Anatō as an search result option.
```
const SearchBarDropdown: React.FC = () => {

  return (
    <div>
        {/* Additional Code */}
        <DisplaySearchBarSuggestions
          setAsMisspelled={setAsMisspelled}
          foundMatch={foundMatch}
        />
        {/* Additional Code */}
    </div>
    )
  );
};

export default SearchBarDropdown;
```
Screenshots or Live Previews:<img width="387" alt="Screenshot 2025-04-04 at 4 36 58 PM" src="https://github.com/user-attachments/assets/7fb83ca7-930d-4dcb-b0b5-34d61762b849" />




## Home Page Components

### Homepage Component
Name: Homepage\
Purpose: This component renders the homepage of the site.\
Props and Expected Data Types: none.

Example Usage within the Application: User loads the site, page renders.
```
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    {/* Additional Routes */}
      <Route path='/'>
        <Route index element={ <Homepage /> } />
      </Route>
    {/* Additional Routes */}
  );
}

export default App;
```
Screenshots or Live Previews:
![image](https://github.com/user-attachments/assets/71ea72ab-1264-4b5c-a21c-7e5a343d7248)



### Footer Component
Name: Footer\
Purpose: This component returns the footer component of the site which includes contact information for the team members.\
Props and Expected Data Types: none.

Example Usage within the Application: App calls the Footer at the bottom of the page.
```
import Footer from "./pages/Homepage/components/Footer";
{/* Additional imports */}
const App = () => {
  {/* Additional code */}
  return (
    {/* Additional code */}
      <Footer />
    {/* Additional code */}
  );
}

export default App;
```
Screenshots or Live Previews:\
![image](https://github.com/user-attachments/assets/35a00bd0-9547-4234-a0f1-9683fed22d5e)


### MemberEmail Component
Name: MemberEmail\
Purpose: This component returns an href with the name given and link to the team member's email.\
Props and Expected Data Types: \
memberName: string - the name of the member to be displayed.
email: string - the email of the member to link to. 

Example Usage within the Application: Footer component calls MemberEmail component.
```
import MemberEmail from "./MemberEmail";
{/* Additional imports */}
const Footer = () => {
  {/* Additional code */}
  return (
    {/* Additional code */}
      <MemberEmail memberName={"Sarah Jang"} />
    {/* Additional code */}
  );
}

export default Footer;
```
Screenshots or Live Previews:\
![image](https://github.com/user-attachments/assets/66fb907d-077e-417c-a2b5-acee19a0c891)


### Tagline Component
Name: Tagline\
Purpose: This component returns the formatted tagline of the site.\
Props and Expected Data Types: none.

Example Usage within the Application: Homepage calls the Tagline component.
```
import Tagline from "./components/Tagline";
{/* Additional imports */}
const Homepage = () => {
  {/* Additional code */}
  return (
    {/* Additional code */}
      <Tagline />
    {/* Additional code */}
  );
}

export default Homepage;
```
Screenshots or Live Previews:\
![image](https://github.com/user-attachments/assets/3f23a2d5-e0ff-47fb-bdb6-026eef6b52cf)



### WebsiteDescription Component
Name: WebsiteDescription\
Purpose: This component returns the formatted description of the site.\
Props and Expected Data Types: none.

Example Usage within the Application: Homepage calls the Tagline component.
```
import WebsiteDescription from "./components/WebsiteDescription";
{/* Additional imports */}
const Homepage = () => {
  {/* Additional code */}
  return (
    {/* Additional code */}
      <WebsiteDescription />
    {/* Additional code */}
  );
}

export default Homepage;
```
Screenshots or Live Previews:\
![image](https://github.com/user-attachments/assets/9783d4c4-8e6c-436e-b263-4a3a33b890d9)


## Profile Page Components
### ProfilePage Component
Name: ProfilePage\
Purpose: This component renders the profile page.\
Props and Expected Data Types: none.

Example Usage within the Application: User clicks on the profile button, page renders.
```
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    {/* Additional Routes */}
      <Route path='/profile'>
        <Route index element={ <ProfilePage /> } />
      </Route>
    {/* Additional Routes */}
  );
}

export default App;
```
Screenshots or Live Previews:
![image](https://github.com/user-attachments/assets/21cbed3f-5b6c-4157-9f50-17997414132e)

### ListItem Component
Name: ListItem\
Purpose: This component returns an item styled in the format of a list for the profile page.\
Props and Expected Data Types:\
text: string - the text to display in the list item.

Example Usage within the Application: Locations and ingredients are listed in the profile page.
```
import ListItem from "./components/ListItem";
import { ITEM_DATA } from "../../data/item-data";
{/* Additional imports */}

const ProfilePage = () => {
  {/* Additional code */}
  return (
    {/* Additional code */}
      <div className="flex flex-col self-center space-y-2 mt-6">
        {ITEM_DATA.map((item, index) =>
          item.haitianKreyolNames[0] !== "" ? (
            <ListItem text={item.haitianKreyolNames[0]} key={index} />
          ) : null
        )}
      </div>
    {/* Additional code */}
  );
}

export default ProfilePage;
```
Screenshots or Live Previews:\
![image](https://github.com/user-attachments/assets/54668947-4383-4655-ac5d-cf7ed6329e88)

### Title Component
Name: Title\
Purpose: This component returns the text formatted as a title for the profile page.\
Props and Expected Data Types:\
text: string - the text to display in the title.

Example Usage within the Application: Titles on the profile page display either "Saved Ingredients" or "Saved Locations".
```
import Title from "./components/Title";
{/* Additional imports */}
const ResultsPage = () => {
  const [result, setResult] = useState<ItemData>();
  {/* Additional code */}
  return (
    {/* Additional code */}
      <Title text={ingredientTitle} />
    {/* Additional code */}
      <Title text={locationTitle} />
    {/* Additional code */}
  );
}

export default ProfilePage;
```
Screenshots or Live Previews:\
![image](https://github.com/user-attachments/assets/ad8f684d-1ded-4777-bbe1-16ea58a9091a)


## Suggestions Page Components
### SuggestionsPage Component
Name: SuggestionsPage\
Purpose: This component provides a page where users can search for items, select an item from the suggestions, and submit information about where they have seen the item.\
Props and Expected Data Types: This component does not receive any props.\

Example Usage within the Application: User clicks on ingredient (ex: Malanga), page renders.
```
import SuggestionsPage from "./SuggestionsPage";

function App() {
  return (
    <div>
      <SuggestionsPage />
    </div>
  );
}

export default App;
```
Screenshots or Live Previews:
![image](https://github.com/user-attachments/assets/278785ca-93cc-4bba-8c20-64ada1a8abfc)

### SearchBar Component
Name: SearchBar\
Purpose: This component provides a search input field for users to enter their search terms.\
Props and Expected Data Types:\
value: string - The current value of the search input.\
onChange: (value: string) => void - A function to handle changes to the search input.\
Example Usage within the Application: Users looks up an ingredient (ex: Malanga)
```
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
    </div>
  );
}

export default App;
```
Screenshots or Live Previews:
![image](https://github.com/user-attachments/assets/9ce644d3-22ca-4e3a-8499-8b8753a6652a)
![image](https://github.com/user-attachments/assets/562bc181-5d4b-44ca-a14e-97f98ce5f575)

## Results Page Components
### ResultsPage Component
Name: ResultsPage\
Purpose: This component renders the result of the item searched for in the NavSearchBar.\
Props and Expected Data Types:\
itemName: string - name of the item clicked on in the search bar.

Example Usage within the Application: User clicks on ingredient (ex: Malanga), page renders.
```
import ResultsPage from "./ResultsPage";

function App() {
  return (
    {/* Additional Routes */}
      <Route path='/results/:itemName'>
        <Route index element={ <ResultsPage /> } />
      </Route>
    {/* Additional Routes */}
  );
}

export default App;
```
Screenshots or Live Previews:
![Results page showing bean sprouts](https://github.com/user-attachments/assets/aadb5cd8-9850-4779-acad-a781a29234e7)

### ItemInfo Component
Name: ItemInfo\
Purpose: This component returns the information of the item searched for in the NavSearchBar and returns to ResultsPage.\
Props and Expected Data Types:\
item: ItemData - the item as a type of ItemData\
itemName: string - the name of the item

Example Usage within the Application: ResultsPage calls the component with the item it wants to display.
```
import ItemInfo from "./components/ItemInfo";
{/* Additional imports */}
function ResultsPage() {
  const [result, setResult] = useState<ItemData>();
  {/* Additional code */}
  return (
    {/* Additional code */}
      <ItemInfo item={result} itemName={itemName!}/>
    {/* Additional code */}
  );
}

export default App;
```
Screenshots or Live Previews:\
![Item info component for bean sprouts](https://github.com/user-attachments/assets/8afca4a3-290a-43c9-936f-879ea80eb032)

### ListLocation Component
Name: ListLocation\
Purpose: This component returns the stores where the item being display on the ResultsPage can be found.\
Props and Expected Data Types:\
text: string - the location as a string

Example Usage within the Application: ResultsPage calls the component with the text it wants to display.
```
import ListLocation from "./components/ListLocation";
import { LOCATION_DATA } from "../../data/location-data";
{/* Additional imports */}
function ResultsPage() {
  {/* Additional code */}
  return (
    {/* Additional code */}
      {LOCATION_DATA.map((location, index) => (
        <ListLocation text={location.name} key={index} />
      ))}
    {/* Additional code */}
  );
}

export default App;
```
Screenshots or Live Previews:\
![List of locations](https://github.com/user-attachments/assets/26e82235-e6b6-4d19-8367-185d8137117a)

### SuggestionButton Component
Name: SuggestionButton\
Purpose: This component returns a button that uses the provided function in onClick.\
Props and Expected Data Types:\
buttonFn: () => void - the function to be passed to the button.

Example Usage within the Application: ResultsPage calls the component with the button function that links to the SuggestionsPage.
```
import SuggestionButton from "./components/SuggestionButton";
{/* Additional imports */}
function ResultsPage() {
  {/* Additional code */}
  return (
    {/* Additional code */}
      <SuggestionButton buttonFn={() => navigate(`/suggestion/${itemName}`)} />
    {/* Additional code */}
  );
}

export default App;
```
Screenshots or Live Previews:\
![Button that reads "Have a suggestion?"](https://github.com/user-attachments/assets/bf7cd034-4cba-41cf-9c93-223d8319cc22)


