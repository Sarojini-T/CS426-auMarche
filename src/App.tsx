import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Routes>
            <Route path='/'>
              {/* <Route index element={ <HomePage /> } /> */}
            </Route>
            <Route path='/suggestion'>
              {/* <Route index element={ <SuggestionPage /> } /> */}
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
  );
}

export default App;
