import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingContact from "./components/layout/FloatingContact";
import PageTransition from "./components/layout/PageTransition";
import Cursor from "./components/common/Cursor";
import Loader from "./components/common/Loader";
import { useLenis } from "./hooks/useLenis";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <div className="relative bg-black">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Cursor />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
      <FloatingContact />
    </div>
  );
}
