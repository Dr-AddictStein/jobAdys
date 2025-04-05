import Hero from "@/components/Public/Hellopage/Hero";
import Testimonials from "@/components/Public/Hellopage/Testimonials";
import Features from "@/components/Public/Hellopage/Features";
import CTA from "@/components/Public/Hellopage/CTA";
import Header from "@/components/Public/Hellopage/Header";
import Footer from "@/components/Public/Hellopage/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}