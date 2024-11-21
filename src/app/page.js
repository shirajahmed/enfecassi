import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <div className="px-4">
        <Header />
        <HeroSection />
        {/* <Explore /> */}
      </div>
    </div>
  );
}
