import "./App.css";
import About from "./Components/About/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import Training from "./Components/Training/Training";
import Skill from "./Components/Skill/Skill";
import Experience from "./Components/Experience/Experience";
import Contract from "./Components/Contract/Contract";
import Projects from "./Components/Projects/Projects";
import ESDCDetails from "./Components/Projects/ESDC/ESDCDetails";
import SkyNewsDetails from "./Components/Projects/SkyNews/SkyNewsDetails";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/training" element={<Training />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/contract" element={<Contract />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/esdc-details" element={<ESDCDetails />}></Route>
            <Route path="/skynews-details" element={<SkyNewsDetails />}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </div>
  );
  
  
}

export default App;
