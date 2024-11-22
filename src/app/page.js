import Explore from "@/components/Explore";
import HeroSection from "../components/HeroSection";
import Listing from "@/components/Listing";
import Overview from "@/components/Overview";
import Checkout from "@/components/Checkout";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Explore />
      <Listing />
      <Overview />
      <Checkout />
    </div>
  );
}
