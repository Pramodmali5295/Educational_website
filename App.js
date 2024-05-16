import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";
import Videoplayer from "./Components/Videoplayer/Videoplayer";

function App() {
  const [play, setPlay] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our program" title="What We Offer" />
        <Programs />

        <About setPlay={setPlay} />
        <Title subtitle="Gallary" title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Student Says " />
        <Testimonials />
        <Title subtitle="Contact us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer play={play} setPlay={setPlay} />
    </div>
  );
}

export default App;
