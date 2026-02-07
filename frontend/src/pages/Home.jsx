import React, { useEffect, useState } from 'react'
import Product from './Product'
import Footer from '../component/Footer'

function Home() {
  const [heroIndex, setHeroIndex] = useState(0)

  const heroSlides = [
    {
      title: "Experience Luxury",
      subtitle: "Elevate your collection with our exquisite selection",
      color: "from-slate-900 to-slate-800"
    },
    {
      title: "Crafted for You",
      subtitle: "Discover timeless pieces that define your style",
      color: "from-zinc-900 to-zinc-800"
    },
    {
      title: "Innovation Meets Elegance",
      subtitle: "Where premium quality meets modern aesthetics",
      color: "from-neutral-900 to-neutral-800"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='overflow-x-hidden w-full bg-white pt-24 pb-12 md:pt-28'>
      
      {/* Hero Section */}
      <section className='relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white'>
        {/* Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-gradient-to-br ${slide.color} transition-opacity duration-1000 ${
                idx === heroIndex ? 'opacity-5' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className='relative h-full flex items-center justify-center px-4 md:px-8'>
          <div className='text-center max-w-4xl'>
            <div className='overflow-hidden mb-4 md:mb-6'>
              <h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-tight'>
                {heroSlides[heroIndex].title}
              </h1>
            </div>
            <div className='overflow-hidden mb-8 md:mb-10'>
              <p className='text-lg md:text-2xl text-gray-600 font-light'>
                {heroSlides[heroIndex].subtitle}
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button className='w-full sm:w-auto px-8 py-3 md:py-4 bg-black text-white rounded-full font-semibold text-base md:text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl'>
                Explore Now
              </button>
              <button className='w-full sm:w-auto px-8 py-3 md:py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-base md:text-lg hover:bg-gray-900 hover:text-white transition-all duration-300'>
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Hero Indicator Dots */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3'>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === heroIndex ? 'bg-gray-900 w-8' : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 md:py-24 px-4 md:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {[
              {
                icon: '✨',
                title: 'Premium Quality',
                description: 'Crafted with the finest materials and attention to detail'
              },
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Swift shipping to your doorstep with tracking'
              },
              {
                icon: '🛡️',
                title: 'Secure Shopping',
                description: 'Protected transactions and hassle-free returns'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className='text-center hover:scale-105 transition-transform duration-300'
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter removed */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
