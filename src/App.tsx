import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Interaptix from "./components/Interaptix";
import Freelance from "./components/Freelance";
import CreativeStudio from "./components/CreativeStudio";
import Mpod from "./components/Mpod";
import Showcase from "./components/Showcase";
import ArcticWolf from "./components/Arctic Wolf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creative-studio" element={<CreativeStudio />} />
        <Route path="/custom-web" element={<Freelance />} />
        <Route path="/enterprise" element={<ArcticWolf />} />
        <Route path="/ar" element={<Interaptix />} />
        <Route path="/fashion" element={<Mpod />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </>
  );
}

export default App;
