import './App.css'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Footer from './Layout/Footer'
import Admissions from './Pages/Admissions'
import Programs from './Pages/Programs'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Apply from './Pages/Apply'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
