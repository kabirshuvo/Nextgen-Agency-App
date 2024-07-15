import Footer from "@/components/Footer";
import SubscribePopup from "@/components/PopupModal";
import AboutSection from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";
import PreviousWorks from "@/components/sections/PreviousWorks";
import Reviews from "@/components/sections/Reviews";
import ServicesSection from "@/components/sections/Services";
import BlogPage from "./(pages)/blog/page";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden ">
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="relative z-10">
        <AboutSection />
      </div>
      <div className="relative z-10">
        <ServicesSection />
      </div>
      <div className="relative z-10">
        <PreviousWorks />
      </div>
      <div className="relative z-10">
        <Reviews />
      </div>
      <div className="relative z-10">
        <BlogPage />
      </div>
      <div className="relative z-10">
        <Contact />
      </div>
    </main>
  );
}
