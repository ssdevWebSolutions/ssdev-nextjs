import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./features/marketing/Hero";
import Services from "./features/marketing/Services";
import ProcessAnimation from "./components/Processanimation";
import Clients from "./features/Clients";
import Footer from "./components/Footer";
import TestimonialsSection from "./features/marketing/Testimonials";




export const metadata = {
  title: "Web Development & SEO Agency in India",
  description:
    "We are a web development and SEO agency building fast, scalable websites using Next.js and React for growing businesses.",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <ProcessAnimation />
        <Clients />
        {/* <Portfolio /> */}
        {/* <HowWeWorkSection /> */}
        
        <TestimonialsSection />
        {/* <CTA /> */}
        {/* <SocialSection /> */}
        {/* <AboutContact /> */}
      </main>
      <Footer />
    </>
  );
}


