import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    // --- APPLY YOUR THEME HERE ---
    // You can change "blue" to "dark" later if you add a dark theme.
    // Or remove the data-theme attribute completely to go back to the default teal.
    <div className="App" data-theme="blue">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
