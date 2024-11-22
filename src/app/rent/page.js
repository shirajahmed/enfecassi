import Explore from "@/components/Explore";

import Listing from "@/components/Listing";
import Overview from "@/components/Overview";
import Checkout from "@/components/Checkout";
import HeroSection from "@/components/HeroSection";
import { data, dataItem } from "../util/data";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Listing data={data} title={"Newly listed homes in San Francisco"} />
      <Overview />
      <Explore dataItem={dataItem} title={"Explore homes on Trulia"} />
      <Checkout />
    </div>
  );
}
