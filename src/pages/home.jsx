import Hero from "../components/home/hero.jsx";
import { Process } from "../components/home/process.jsx";
import { Link } from "react-router-dom";
import Propositions from "../components/home/proposition.jsx"
import Offers from "../components/home/offers.jsx"
import Projects from "../components/home/projects.jsx";
import About from "../components/home/about.jsx";
import Testimonials from "../components/home/testimonials.jsx";
import Faqs from "../components/home/faqs.jsx";
import Articles from "../components/home/articles.jsx";


export default function Home(){
      return(
      <>
        <Hero/>
        <Process/>
        <Propositions/>
        <Offers/>
        <Projects/>
        <About/>
        <Testimonials/>
        <Faqs/>
        <Articles/>
       </>
      )
}