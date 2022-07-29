import "./App.css";
import Header from "./Components/Header.js";
import Router from "./Components/Router.js";
import ScrollToTop from "react-scroll-to-top";
//import Home from "./Components/Home.js"

function App() {
  return (
    <div>
      <ScrollToTop
        className="scrolltotop"
        style={{ backgroundColor: "#75dbcd" }}
      />
      <Header />
      <Router />
    </div>
  );
}

export default App;