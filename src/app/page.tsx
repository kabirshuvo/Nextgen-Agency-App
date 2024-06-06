import AboutSection from "@/components/sections/About";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/Services";

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
    </main>
  );
}
