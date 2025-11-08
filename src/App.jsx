import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Highlights from "./components/Highlights";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <main className="container">
        <About />
        <Products />
        <Highlights />
      </main>
      <ContactFooter />
    </div>
  );
}
