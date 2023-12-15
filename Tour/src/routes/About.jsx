import AboutUS from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function About() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="/night.jpg"
    title="About"
    btnClass="hide"
    />
    <AboutUS/>
    <Footer/>
   </>
  )
}

export default About
