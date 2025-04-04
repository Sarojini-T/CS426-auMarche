EACH ENTRY SHOULD HAVE:
Component name and purpose.
Props and expected data types.
Example usage within the application.
Screenshots or live previews.

## Home Page Components
## Profile Page Components
## Suggestions Page Components
### SuggestionsPage Component
Name: SuggestionsPage\
Purpose: This component provides a page where users can search for items, select an item from the suggestions, and submit information about where they have seen the item.\
Props and Expected Data Types: This component does not receive any props.

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


