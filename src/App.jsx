import { Navbar, Hero } from "./components/Header.jsx";
import { PromiseStrip, Services, Process, WhyUs } from "./components/Sections.jsx";
import Fleet from "./components/Fleet.jsx";
import Destinations from "./components/Destinations.jsx";
import { Enquiry, FAQ } from "./components/Contact.jsx";
import { Footer, FloatingActions } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromiseStrip />
        <Services />
        <Fleet />
        <Destinations />
        <Process />
        <WhyUs />
        <Enquiry />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
