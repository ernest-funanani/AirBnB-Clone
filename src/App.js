import "./App.css";
import Header from "./componets/Layout/Header";
import Home from "./componets/Home";
import Footer from "./componets/Layout/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
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
