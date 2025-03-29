import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router'

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
            <Route path='/profile'>
              {/* <Route index element={ <ProfilePage /> } /> */}
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
