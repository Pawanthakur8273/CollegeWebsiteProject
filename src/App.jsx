import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compnents/Navbar";
import Footer from "./compnents/Footer";
import Home from "./pages/NavbarPages/Home";
import About from "./pages/NavbarPages/About";
import ContactUs from "./pages/NavbarPages/ContactUs";
import PlaylistHub from "./pages/NavbarPages/PlaylistHub";
import SubSem1 from "./pages/subjects/SubSem1/SubSem1";
import SubSem2 from "./pages/subjects/SubSem2/SubSem2";
import SubSem3 from "./pages/subjects/SubSem3/SubSem3";
import SubSem4 from "./pages/subjects/SubSem4/SubSem4";
import SubSem5 from "./pages/subjects/SubSem5/SubSem5";
import SubSem6 from "./pages/subjects/SubSem6/SubSem6";
import SubSem7 from "./pages/subjects/SubSem7/SubSem7";
import SubSem8 from "./pages/subjects/SubSem8/SubSem8";
import YoutubeChannel1 from "./pages/subjects/SubSem1/YoutubeChannel1";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlisthub" element={<PlaylistHub />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          
          <Route path="/subSem1" element={<SubSem1 />} />
          <Route path="/subSem2" element={<SubSem2 />} />
          <Route path="/subSem3" element={<SubSem3 />} />
          <Route path="/subSem4" element={<SubSem4 />} />
          <Route path="/subSem5" element={<SubSem5 />} />
          <Route path="/subSem6" element={<SubSem6 />} />
          <Route path="/subSem7" element={<SubSem7 />} />
          <Route path="/subSem8" element={<SubSem8 />} />

          <Route path="/subject1" element={<YoutubeChannel1 />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
