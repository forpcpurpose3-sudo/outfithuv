import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import RelatedProduct from '../component/RelatedProduct';
import Loading from '../component/Loading';

function ProductDetail() {
    let {productId} = useParams()
    let {products,currency ,addtoCart ,loading} = useContext(shopDataContext)
    let [productData,setProductData] = useState(false)

    const [image, setImage] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [size, setSize] = useState('')



   const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        console.log(productData)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setImage4(item.image4)
        setImage(item.image1)

        return null;
      }

    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])
  return productData ? (
    <div className='w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white'>
      {/* Product Display Section */}
      <section className='pt-24 pb-16 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            
            {/* Image Gallery */}
            <div className='space-y-4'>
              {/* Main Image */}
              <div className='relative rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-xl border border-gray-200'>
                <img 
                  src={image} 
                  alt={productData.name}
                  className='w-full h-96 md:h-[500px] object-cover' 
                />
              </div>

              {/* Thumbnails */}
              <div className='grid grid-cols-4 gap-4'>
                {[image1, image2, image3, image4].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImage(img)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      image === img ? 'border-blue-500 shadow-lg' : 'border-gray-300'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Product-${idx}`}
                      className='w-full h-24 object-cover hover:scale-110 transition-transform duration-300' 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className='space-y-6'>
              <div>
                <h1 className='text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight'>
                  {productData.name.toUpperCase()}
                </h1>
                
                {/* Rating */}
                <div className='flex items-center gap-2 mb-4'>
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className='text-2xl'>⭐</span>
                  ))}
                  <span className='text-xl'>⭐️</span>
                  <p className='text-gray-700 font-light ml-2'>(124 reviews)</p>
                </div>

                {/* Price */}
                <p className='text-4xl font-black text-gray-900 mb-6'>
                  {currency}{productData.price}
                </p>

                {/* Description */}
                <p className='text-gray-700 text-lg leading-relaxed font-light'>
                  {productData.description} and Stylish, breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable, and designed for effortless style.
                </p>
              </div>

              {/* Size Selection */}
              <div className='border-t border-gray-200 pt-6'>
                <p className='text-lg font-bold text-gray-900 mb-4'>Select Size</p>
                <div className='flex flex-wrap gap-3'>
                  {productData.sizes.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSize(item)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        item === size
                          ? 'bg-black text-white shadow-lg'
                          : 'bg-white/50 backdrop-blur-xl border border-gray-200 text-gray-900 hover:shadow-md'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addtoCart(productData._id, size)}
                className='w-full py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl flex items-center justify-center'
              >
                {loading ? <Loading /> : "Add to Cart"}
              </button>

              {/* Info Section */}
              <div className='space-y-3 p-6 bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl'>
                <p className='text-gray-900 font-light'>✓ 100% Original Product</p>
                <p className='text-gray-900 font-light'>✓ Cash on delivery available</p>
                <p className='text-gray-900 font-light'>✓ Easy returns within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Related Products Section */}
      <section className='py-16 md:py-24 px-4 md:px-8 border-t border-gray-200'>
        <div className='max-w-7xl mx-auto'>
          {/* Tabs */}
          <div className='flex gap-4 mb-12 border-b border-gray-200'>
            <button className='px-6 py-4 font-bold text-gray-900 border-b-2 border-gray-900'>
              Description
            </button>
            <button className='px-6 py-4 text-gray-600 font-light hover:text-gray-900'>
              Reviews (124)
            </button>
          </div>

          {/* Description Content */}
          <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 mb-16'>
            <p className='text-gray-700 text-lg leading-relaxed font-light'>
              Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on TheOutfitHuv. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essential for those who value both fashion and function.
            </p>
          </div>

          {/* Related Products */}
          <RelatedProduct 
            category={productData.category} 
            subCategory={productData.subCategory} 
            currentProductId={productData._id}
          />
        </div>
      </section>
    </div>
  ) : (
    <div className='w-full h-screen bg-white flex items-center justify-center'>
      <div className='text-center'>
        <p className='text-2xl font-light text-gray-600'>Loading...</p>
      </div>
    </div>
  )
}

export default ProductDetail
