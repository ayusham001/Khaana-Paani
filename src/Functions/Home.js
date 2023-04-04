import React, { useEffect } from "react";
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import ScrollToTop from '../components/ScrollToTop';
import Products from '../components/Products';
import scrollreveal from "scrollreveal";
export default function Home (){
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
    return (
      <>
      <Navbar/>
      <Hero />
      <Portfolio/>
      <Services/>
      <Products/>
      <ScrollToTop/>
      <Footer/>
      </>
    )
  }
