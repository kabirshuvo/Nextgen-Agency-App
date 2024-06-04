import HeroSection from "@/components/sections/HeroSection";
import HeroParticles from "@/components/particals/HeroParticals";
import ParticlesComponent from "@/components/testParticals";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <ParticlesComponent /> */}
        {/* <HeroParticles /> */}
      </div>
      <div className="relative z-10">
        <HeroSection />
      </div>
    </main>
  );
}
