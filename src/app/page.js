import Explore from "@/components/Explore";
import HeroSection from "../components/HeroSection";
import Listing from "@/components/Listing";
import Overview from "@/components/Overview";
import Checkout from "@/components/Checkout";
import { data, dataItem } from "./util/data";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Explore dataItem={dataItem} title={"Explore homes on Trulia"} />
      <Listing data={data} title={"Newly listed homes in San Francisco"} />
      <Overview />
      <Checkout />
    </div>
  );
}
