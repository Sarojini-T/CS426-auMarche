import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <h1 className="font-jomhuria text-5xl">Hi! Testing Jomhuria Font</h1>
          <h1 className="font-anek text-5xl">Hi! Testing Anek Font</h1>
          <Routes>
            <Route path='/'>
              {/* <Route index element={ <HomePage /> } /> */}
            </Route>
            <Route path='/suggestion'>
              {/* <Route index element={ <SuggestionPage /> } /> */}
            </Route>
            <Route path='/profile'>
              {/* <Route index element={ <ProfilePage /> } /> */}
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
