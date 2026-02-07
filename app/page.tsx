import React from "react";
import Footer from "./components/Footer";
import TestimonialsSection from "./features/marketing/Testimonials";
import Clients from "./features/Clients";
import ProcessAnimation from "./components/Processanimation";
import Services from "./features/marketing/Services";
import Hero from "./features/marketing/Hero";
import NavBar from "./components/NavBar";

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


