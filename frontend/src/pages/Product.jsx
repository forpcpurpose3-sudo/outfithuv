import React from 'react'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function Product() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white'>
      {/* Latest Collection Section */}
      <section className='py-16 md:py-24 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto'>
          <LatestCollection/>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className='py-16 md:py-24 px-4 md:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <BestSeller/>
        </div>
      </section>
    </div>
  )
}

export default Product
