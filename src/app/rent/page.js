import Explore from "@/components/Explore";

import Listing from "@/components/Listing";
import Overview from "@/components/Overview";
import Checkout from "@/components/Checkout";
import HeroSection from "@/components/HeroSection";

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
