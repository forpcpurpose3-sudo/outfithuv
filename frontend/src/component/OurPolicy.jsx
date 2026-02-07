import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <section className='w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-white via-gray-50 to-white border-t border-gray-200'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight'>
            Our Policy
          </h2>
          <p className='text-gray-600 text-lg md:text-xl font-light'>
            Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
          </p>
        </div>

        {/* Policy Cards */}
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Easy Exchange */}
          <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300'>
            <RiExchangeFundsLine className='mx-auto mb-6 md:w-16 md:h-16 w-12 h-12 text-blue-600' />
            <h3 className='font-bold text-2xl text-gray-900 mb-3'>Easy Exchange Policy</h3>
            <p className='text-gray-700 font-light text-lg'>
              Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.
            </p>
          </div>

          {/* 7 Days Return */}
          <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300'>
            <TbRosetteDiscountCheckFilled className='mx-auto mb-6 md:w-16 md:h-16 w-12 h-12 text-green-600' />
            <h3 className='font-bold text-2xl text-gray-900 mb-3'>7 Days Return Policy</h3>
            <p className='text-gray-700 font-light text-lg'>
              Shop with Confidence – 7 Days Easy Return Guarantee.
            </p>
          </div>

          {/* Support */}
          <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300'>
            <BiSupport className='mx-auto mb-6 md:w-16 md:h-16 w-12 h-12 text-purple-600' />
            <h3 className='font-bold text-2xl text-gray-900 mb-3'>Best Customer Support</h3>
            <p className='text-gray-700 font-light text-lg'>
              Trusted Customer Support – Your Satisfaction Is Our Priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPolicy
