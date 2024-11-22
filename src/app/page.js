import Explore from "@/components/Explore";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Listing from "@/components/Listing";
import Overview from "@/components/Overview";
import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="px-4">
        <Header />
        <HeroSection />
        <Explore />
        <Listing />
        <Overview />
        <Checkout />
        <Footer />
      </div>
    </div>
  );
}
