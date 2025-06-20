// import Image from "next/image";
import Hero from './components/hero'
import LocationPrelude from './components/locationPrelude'
import Menu from './components/menu'
import MenuPrelude from './components/menuPrelude'
import Contact from './components/contact'

export default function Home() {
  return (
    <>
   
    <Hero/>
    <MenuPrelude/>
    <Menu/>
    <LocationPrelude/>
    <Contact/>


  
    </>
  );
}
