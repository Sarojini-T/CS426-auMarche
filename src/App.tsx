import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SuggestionPage from "./pages/UserSuggestionPage/SuggestionPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Homepage from "./pages/Homepage/Homepage";
import SelectedLanguageContextProvider from "./components/SelectedLanguageProvider";


function App() {
  return (
    <SelectedLanguageContextProvider>
      <Router>
      <div className='App'>
        <div className='content'>
          <Routes>
            <Route path='/'>
              <Route index element={ <Homepage /> } />
            </Route>
            <Route path='/suggestion' element={ <SuggestionPage /> }>
            </Route>
            <Route path='/profile' element={ <ProfilePage /> }>
            </Route>
            <Route path='/results/:itemName'>
              <Route index element={ <ResultsPage /> } />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
    </SelectedLanguageContextProvider>  
  );
}

export default App;
