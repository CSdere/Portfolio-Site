import React from "react";
import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";
import Timeline from "./components/Timeline";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <WhoAmI />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
