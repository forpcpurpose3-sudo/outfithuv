import React from 'react'
import about from '../assets/about.jpg'
import Footer from '../component/Footer'

function About() {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='pt-24 pb-16 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight'>
              About Us
            </h1>
            <p className='text-xl text-gray-600 font-light'>Discover our story and mission</p>
          </div>

          {/* Main Section */}
          <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
            {/* Image */}
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-50' />
              <img 
                src={about} 
                alt="About TheOutfitHuv" 
                className='relative rounded-3xl shadow-2xl w-full h-full object-cover'
              />
            </div>

            {/* Content */}
            <div className='space-y-6'>
              <div>
                <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight'>
                  Our Story
                </h2>
                <p className='text-gray-700 text-lg md:text-xl leading-relaxed font-light'>
                  TheOutfitHuv was born from a passion for smart, seamless shopping. We created a platform to deliver quality products, trending styles, and everyday essentials all in one place. With reliable service, fast delivery, and exceptional value, we make your online shopping experience simple, satisfying, and stress-free.
                </p>
              </div>
              <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>For Modern Shoppers</h3>
                <p className='text-gray-700 text-lg leading-relaxed font-light'>
                  We combine style, convenience, and affordability. Whether it's fashion, essentials, or trends, we bring everything you need to one trusted platform with fast delivery, easy returns, and a customer-first shopping experience you'll love.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className='mb-20 py-16 border-t border-gray-200'>
            <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight'>
              Our Mission
            </h2>
            <p className='text-gray-700 text-xl md:text-2xl leading-relaxed font-light max-w-4xl'>
              To redefine online shopping by delivering quality, affordability, and convenience. TheOutfitHuv connects customers with trusted products and brands, offering a seamless, customer-focused experience that saves time, adds value, and fits every lifestyle and need.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className='mb-20'>
            <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center tracking-tight'>
              Why Choose Us
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  icon: '✓',
                  title: 'Quality Assurance',
                  desc: 'We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always.'
                },
                {
                  icon: '⚡',
                  title: 'Convenience',
                  desc: 'Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.'
                },
                {
                  icon: '🎯',
                  title: 'Exceptional Customer Service',
                  desc: 'Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105'
                >
                  <div className='text-4xl mb-4'>{item.icon}</div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                  <p className='text-gray-700 leading-relaxed font-light'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
