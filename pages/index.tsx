import Head from "next/head";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";

import FAQ from "../components/FAQ";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-sky-600 ">
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <FAQ />
    </div>
  );
}
