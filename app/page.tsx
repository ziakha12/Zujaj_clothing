import Image from "next/image";
import Hero from "./sections/Hero";
import Brands from "./sections/Brands";
import Collections from "./sections/Collections";
import Modal from "./components/Modal";
import FeaturedProducts from "./sections/FeaturedProducts";
import 'remixicon/fonts/remixicon.css'
import ZaraSection from "./sections/ZaraSection";
import NewLetter from "./sections/NewLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <Brands/>
    <Collections/>
    {/* <Modal/> */}
    <FeaturedProducts/>
    <ZaraSection/>
    <NewLetter/>
    <Footer/>
    </>
  );
}
