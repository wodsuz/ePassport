import Head from "next/head";

import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";

import FAQ from "../components/FAQ";
export default function Home() {
  const pageTitle = "ePassport";
  const description =
    "ePassport mint your digital Passport. With ePassport you can get collect stamps of your favourite cities, earn rewards, become a member of exclusive club, get discounts while travelling, customize your virtual passport and order the physical ePassport NFT.";

  return (
    <div className="w-full min-h-screen bg-purple-600 ">
      <Header />
      <About />
      <Gallery />
      <FAQ />
    </div>
  );
}
