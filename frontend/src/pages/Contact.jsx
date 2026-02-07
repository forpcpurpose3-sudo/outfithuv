import React from 'react'
import contact from "../assets/contact.jpg"
import Footer from '../component/Footer'

function Contact() {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='pt-24 pb-16 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight'>
              Contact Us
            </h1>
            <p className='text-xl text-gray-600 font-light'>Get in touch with our team</p>
          </div>

          {/* Main Section */}
          <div className='grid lg:grid-cols-2 gap-12 items-start mb-20'>
            {/* Image */}
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-50' />
              <img 
                src={contact} 
                alt="Contact TheOutfitHuv" 
                className='relative rounded-3xl shadow-2xl w-full h-full object-cover'
              />
            </div>

            {/* Contact Info */}
            <div className='space-y-8'>
              {/* Our Store */}
              <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8'>
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Store</h2>
                <div className='text-gray-700 text-lg leading-relaxed font-light space-y-1'>
                  <p>Raja bazar near Pillar no 56</p>
                  <p>Patna 800025</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8'>
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>Get In Touch</h2>
                <div className='space-y-3'>
                  <p className='text-gray-700 text-lg font-light'>
                    <span className='font-semibold'>Phone:</span> +91-7903184915
                  </p>
                  <p className='text-gray-700 text-lg font-light'>
                    <span className='font-semibold'>Email:</span> subodh282516@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact