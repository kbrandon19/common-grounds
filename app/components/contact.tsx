import React from 'react'

function contact() {
  return (
    <div className='w-full h-auto relative my-10'>
      <div className='w-auto md:max-w-1/2 md:mx-auto h-auto flex flex-col md:flex-row gap-2 md:gap-0 justify-between px-10 md:px-0'>
        <div>
          <h2 className='text-4xl'>Store Hours</h2>
          
          <div>
            <div className='flex flex-row gap-2'>
              <p className="w-40">Jueves - Domingo:</p>
              <p>08:00 - 14:00</p>
            </div>
            <div className='flex flex-row gap-2'>
              <p className="w-40">Lunes - Meircoles:</p>
              <p> 08:00 - 13:30</p>
            </div>
           
          </div>
          </div>
        <div className='flex flex-col gap-2'>
          <p>WhatsApp 096 421 3147</p>
          <p>IG commongroundss</p>
        </div>
      </div>

      {/* Google Map Location */}
      <div className='md:px-10 -mb-10 pt-10'>
       
      <div className="w-full md:w-5/6 h-96 mx-auto aspect-[16/9] shadow-lg rounded-lg">
         <iframe
      src="https://www.google.com/maps?q=Common+Grounds+Coffee+and+Waffle+House&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </div>
 
      </div>
      {/* Red Background Banner */}
      <div className='absolute -z-1 w-full h-24 bg-[#9C002B]'></div>
    </div>
  )
}

export default contact