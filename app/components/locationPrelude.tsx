import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function locationPrelude() {
  return (
    <div className='w-full h-auto'>
      <div className='w-auto h-120 my-0 px-4 flex flex-col items-center justify-center bg-[#0f4c4d]'>
          <div className='w-2/3 h-auto  mx-auto text-center text-white'>
          <h3 className="text-xs uppercase pb-2 mb-4">
              <p> - Ven a visitarnos -</p>
            </h3>
              {/* <h3 className='text-5xl md:text-6xl xl:text-7xl mb-4 bold --font-playfair-display'>Ven y disfrutar desayuno con nosotros!</h3> */}
              {/* <p className='text-xl xl:text-2xl '>Conveniently located in the heart of Salinas, Ecuador, we’re here to serve you from early morning to afternoon.</p> */}
              <h2 className="text-4xl md:text-5xl font-bold">Convenientemente ubicado en el corazón de Salinas. Estamos aquí para servirle desde temprano por la mañana hasta la tarde.</h2>
          </div>
      
      </div>
       <div className="w-full md:max-w-1/2 md:mx-auto h-auto flex flex-col items-center lg:flex-row gap-10 lg:gap-0 md:justify-around my-10">
                {/* Open Hours */}
                <div className="text-center">
                  <h2 className="text-4xl mb-2">Store Hours</h2>
        
                  <div>
                    <div className="flex flex-row gap-2">
                      <p className="w-40">Jueves - Domingo:</p>
                      <p>08:00 - 14:00</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <p className="w-40">Lunes - Meircoles:</p>
                      <p> 08:00 - 13:30</p>
                    </div>
                  </div>
                </div>
        
                {/* Social Media */}
                <div className="flex flex-row gap-4 justify-center">

                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp Icon"
                      width={24}
                      height={24}
                    />{" "}
                     <Link href="https://wa.me/0964213147">096 421 3147</Link>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <Image
                      src="/images/instagram.png"
                      alt="Instagram Icon"
                      width={24}
                      height={24}
                    />{" "}
                    <Link href="https://www.instagram.com/commongroundss">commongroundss</Link>
                  </div>

                </div>
              </div>
    </div>
  )
}

export default locationPrelude