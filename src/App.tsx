import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SuggestionPage from "./pages/UserSuggestionPage/SuggestionPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./pages//Footer/Footer";
import SelectedLanguageProvider from "./components/SelectedLanguageProvider";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

function App() {
  return (
    <SelectedLanguageProvider>
        <Router>
        <div className='App'>
          <div className='content'>
            <Routes>
              <Route path="/">
                <Route index element={<Homepage />} />
              </Route>
              <Route path="/suggestion" element={<SuggestionPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/results/:itemName">
                <Route index element={<ResultsPage />} />
              </Route>
              <Route path="/aboutUs">
                <Route index element={<AboutUsPage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </SelectedLanguageProvider>
  );
}

export default App;
