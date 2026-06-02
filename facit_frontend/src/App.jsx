import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx"

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Achievements from "./pages/Achievements.jsx";
import Departments from "./pages/Departments.jsx";
import Programs from "./pages/Programs.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/programs" element={<Programs  />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      

      <Footer />
    </BrowserRouter>

    
  );
}

export default App;