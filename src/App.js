import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./componets/Layout/Header";
import Home from "./componets/Home";
import Footer from "./componets/Layout/Footer";
import SearchPage from "./componets/SearchPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>

      {/* {
        Home page
         Header
         
         Banner
          Search

         Card

         Footer

        Search Page
         Header
      } */}
    </div>
  );
};

export default App;
