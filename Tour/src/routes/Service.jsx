import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";

function Service() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="/night.jpg"
    title="Service"
    btnClass="hide"
    />
    <Trip/>
    <Footer/>
   </>
  )
}

export default Service

