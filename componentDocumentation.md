EACH ENTRY SHOULD HAVE:
Component name and purpose.
Props and expected data types.
Example usage within the application.
Screenshots or live previews.

SuggestionsPage Component
Name: SuggestionsPage
Purpose: This component provides a page where users can search for items, select an item from the suggestions, and submit information about where they have seen the item.
Props and Expected Data Types: This component does not receive any props.

Example Usage within the Application: User clicks on ingredient (ex: Malanga), page renders.
import SuggestionsPage from "./SuggestionsPage";

function App() {
  return (
    <div>
      <SuggestionsPage />
    </div>
  );
}

export default App;
Screenshots or Live Previews:
![image](https://github.com/user-attachments/assets/278785ca-93cc-4bba-8c20-64ada1a8abfc)

SearchBar Component
Name: SearchBar
Purpose: This component provides a search input field for users to enter their search terms.
Props and Expected Data Types:
value: string - The current value of the search input.
onChange: (value: string) => void - A function to handle changes to the search input.
Example Usage within the Application: Users looks up an ingredient (ex: Malanga)

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
Screenshots or Live Previews:
![image](https://github.com/user-attachments/assets/9ce644d3-22ca-4e3a-8499-8b8753a6652a)
![image](https://github.com/user-attachments/assets/562bc181-5d4b-44ca-a14e-97f98ce5f575)
