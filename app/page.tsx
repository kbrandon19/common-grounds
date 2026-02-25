// import Image from "next/image";
import Hero from './components/hero'
import LocationPrelude from './components/locationPrelude'
import Menu from './components/Menu/page'
import MenuPrelude from './components/Banner/menuPrelude'
import Footer from './components/footer'


export default function Home() {
  return (
    <>
   
    <Hero/>
    <MenuPrelude/>
    <Menu/>
    <LocationPrelude/>
    <Footer/>
 

  
    </>
  );
}
