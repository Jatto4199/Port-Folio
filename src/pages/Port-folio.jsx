import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Footer from "../components/Footer";

import { portfolioData } from "../Data/portfolio";

export default function Portfolio() {
  return (
   <>
      <Navbar />

      <Hero hero={portfolioData.hero} />

      <Services services={portfolioData.services} />

      <Projects projects={portfolioData.projects} />

      <Awards awards={portfolioData.awards} />
      <Footer/>
    </>
  )
}
