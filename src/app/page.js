import Explore from "@/components/Explore";
import HeroSection from "../components/HeroSection";
// import Listing from "@/components/Listing";
import Overview from "@/components/Overview";
import Checkout from "@/components/Checkout";

const data = [
  {
    newTag: "new",
    openTag: "open",
    imgUrl:
      "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/1e0fb38ce7f743ef145e9de3902c4b82-full.webp",
    price: 25000,
    address: "169 Vienna St",
    city: "San Francisco, CA 94112",
    additional: "Jeffrey A. Salgado DRE #01501886, Compass",
  },
  {
    newTag: "new - 1 hr ago",
    openTag: "",
    imgUrl:
      "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/46b9ccf9f8a0787531e627b60fad34b1-full.webp",
    price: 30000,
    address: "123 Market St",
    city: "San Francisco, CA 94105",
    additional: "John D. Realtor DRE #02020202, Compass",
  },
  {
    newTag: "sale",
    openTag: "open sat, 1:43 pm",
    imgUrl:
      "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/d2d1281c651069224461b9743f96c5e6-full.webp",
    price: 45000,
    address: "456 Mission Blvd",
    city: "San Francisco, CA 94103",
    additional: "Sarah T. DRE #01010101, Realty Group",
  },
  {
    newTag: "new",
    openTag: "open",
    imgUrl:
      "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/1e0fb38ce7f743ef145e9de3902c4b82-full.webp",
    price: 25000,
    address: "169 Vienna St",
    city: "San Francisco, CA 94112",
    additional: "Jeffrey A. Salgado DRE #01501886, Compass",
  },
  {
    newTag: "sale",
    openTag: "open sat, 1:43 pm",
    imgUrl:
      "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/d2d1281c651069224461b9743f96c5e6-full.webp",
    price: 45000,
    address: "456 Mission Blvd",
    city: "San Francisco, CA 94103",
    additional: "Sarah T. DRE #01010101, Realty Group",
  },
  {
    newTag: "new - 1 hr ago",
    openTag: "",
    imgUrl:
      "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/46b9ccf9f8a0787531e627b60fad34b1-full.webp",
    price: 30000,
    address: "123 Market St",
    city: "San Francisco, CA 94105",
    additional: "John D. Realtor DRE #02020202, Compass",
  },
  {
    newTag: "new - 1 hr ago",
    openTag: "",
    imgUrl:
      "https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/46b9ccf9f8a0787531e627b60fad34b1-full.webp",
    price: 30000,
    address: "123 Market St",
    city: "San Francisco, CA 94105",
    additional: "John D. Realtor DRE #02020202, Compass",
  },

  {
    name: "San Francisco",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Explore />
      {/* <Listing data={data} title={"Newly listed homes in San Francisco"} /> */}
      <Overview />
      <Checkout />
    </div>
  );
}
