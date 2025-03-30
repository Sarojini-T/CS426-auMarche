import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SuggestionPage from "./pages/UserSuggestionPage/SuggestionPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Routes>
            <Route path='/'>
              {/* <Route index element={ <HomePage /> } /> */}
            </Route>
            <Route path='/suggestion' element={ <SuggestionPage /> }>
            </Route>
            <Route path='/profile' element={ <ProfilePage /> }>
            </Route>
            <Route path='/results'>
              {/* <Route index element={ <ResultsPage /> } /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
