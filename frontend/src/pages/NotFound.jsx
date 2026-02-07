import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  
  return (
    <div className='w-full h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center px-4'>
      <div className='text-center'>
        <div className='mb-8'>
          <h1 className='text-8xl md:text-9xl font-black text-gray-900 mb-4 tracking-tight'>
            404
          </h1>
          <p className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>
            Page Not Found
          </p>
          <p className='text-xl text-gray-600 font-light mb-8'>
            Sorry, the page you're looking for doesn't exist.<br />Let's get you back on track.
          </p>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button 
            onClick={() => navigate("/")}
            className='px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl'
          >
            Go to Home
          </button>
          <button 
            onClick={() => navigate("/login")}
            className='px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
