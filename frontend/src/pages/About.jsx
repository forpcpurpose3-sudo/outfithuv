import React from 'react'
import about from '../assets/about.png'

function About() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white pt-24 pb-20 px-4 sm:px-6 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4'>About TheOutfitHuv</h1>
          <p className='text-lg text-gray-600 font-light'>Your trusted online shopping destination</p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 items-center mb-20'>
          <div className='flex justify-center'>
            <img src={about} alt="About" className='w-full rounded-2xl shadow-xl' />
          </div>
          
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold text-gray-900'>Our Story</h2>
            <p className='text-gray-700 text-lg font-light'>
              TheOutfitHuv born for smart, seamless shopping with quality products and fast delivery.
            </p>
            
            <h2 className='text-3xl font-bold text-gray-900 pt-4'>Our Mission</h2>
            <p className='text-gray-700 text-lg font-light'>
              Redefining online shopping through quality, affordability, and convenience.
            </p>
          </div>
        </div>

        <div>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-black text-gray-900'>Why Choose Us</h2>
          </div>
          
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Quality</h3>
              <p className='text-gray-700 font-light'>Strict quality checks and reliable sourcing.</p>
            </div>
            
            <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Convenience</h3>
              <p className='text-gray-700 font-light'>Fast delivery and easy checkout process.</p>
            </div>
            
            <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Support</h3>
              <p className='text-gray-700 font-light'>24/7 customer support and easy returns.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default About