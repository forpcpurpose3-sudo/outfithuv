import React from 'react'
import logo from "../assets/logo.png"
function Footer() {
  return (
    <div className='w-full bg-white'>
      <div className='bg-gradient-to-br from-gray-50 to-gray-100 px-3 sm:px-6 md:px-8 py-12'>
        <div className='max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-12 mb-8 md:mb-12'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <img src={logo} alt="TheOutfitHuv" className='w-6 h-6 md:w-10 md:h-10 flex-shrink-0'/>
              <p className='text-sm sm:text-base md:text-2xl font-bold text-gray-900 break-words'>TheOutfitHuv</p>
            </div>
            <p className='text-sm md:text-base text-gray-700 font-light leading-relaxed'>
              TheOutfitHuv is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.
            </p>
          </div>

          {/* Company Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold text-gray-900'>COMPANY</h3>
            <ul className='space-y-3'>
              <li><a href="/" className='text-gray-700 hover:text-blue-600 transition text-sm md:text-base'>Home</a></li>
              <li><a href="/about" className='text-gray-700 hover:text-blue-600 transition text-sm md:text-base'>About us</a></li>
              <li><a href="/delivery" className='text-gray-700 hover:text-blue-600 transition text-sm md:text-base'>Delivery</a></li>
              <li><a href="/privacy" className='text-gray-700 hover:text-blue-600 transition text-sm md:text-base'>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-bold text-gray-900'>GET IN TOUCH</h3>
            <ul className='space-y-3 text-sm md:text-base'>
              <li><a href="tel:+917903184915" className='text-gray-700 hover:text-blue-600 transition'>+91-7903184915</a></li>
              <li><a href="mailto:subodh282516@gmail.com" className='text-gray-700 hover:text-blue-600 transition'>subodh282516@gmail.com</a></li>
              <li className='hidden md:block'><a href="tel:+17903184915" className='text-gray-700 hover:text-blue-600 transition'>+91 7903184915</a></li>
              <li className='hidden md:block'><a href="mailto:subodh282516@gmail.com" className='text-gray-700 hover:text-blue-600 transition'>subodh282516@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className='border-t border-gray-300'></div>
        <div className='mt-8 text-center text-xs md:text-sm text-gray-600 font-light'>
          Copyright 2025 @TheOutfitHuv.com - All Rights Reserved
        </div>
      </div>
      
    </div>
  )
}

export default Footer
