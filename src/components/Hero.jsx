import React from 'react'

function Hero() {
  return (
    <>
      <main className='bg-[#ff5200] h-screen'>
        <img 
          className='absolute h-127 top-25'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        />
        <img 
          className='absolute h-127 top-25 right-0'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        />
        <div className='text-center pt-50 text-white font-bold text-5xl'>
          <h1>Order food & groceries. Discover<br></br>best restaurants. Swiggy it!</h1>
        </div>

      </main>
    </>
  )
}

export default Hero