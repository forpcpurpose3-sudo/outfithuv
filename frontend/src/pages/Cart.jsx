import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import CartTotal from '../component/CartTotal';

function Cart() {
    const { products, currency, cartItem ,updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData); 

  }, [cartItem]);
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white pt-24 pb-20 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight'>
            Your Cart
          </h1>
          <p className='text-xl text-gray-600 font-light'>Review and modify your items</p>
        </div>

        {/* Cart Items */}
        <div className='space-y-4 mb-12'>
          {cartData.length === 0 ? (
            <div className='text-center py-16'>
              <p className='text-2xl text-gray-700 font-light'>Your cart is empty</p>
              <button 
                onClick={() => navigate("/collection")}
                className='mt-6 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all'
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              return (
                <div 
                  key={index} 
                  className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300'
                >
                  <div className='flex gap-6 items-start'>
                    <img 
                      src={productData.image1} 
                      alt={productData.name}
                      className='w-32 h-32 rounded-xl object-cover shadow-lg' 
                    />
                    <div className='flex-1'>
                      <h3 className='text-2xl font-bold text-gray-900 mb-3'>{productData.name}</h3>
                      <div className='flex flex-wrap items-center gap-6'>
                        <div>
                          <p className='text-gray-600 text-sm mb-1'>Price</p>
                          <p className='text-2xl font-bold text-gray-900'>{currency} {productData.price}</p>
                        </div>
                        <div>
                          <p className='text-gray-600 text-sm mb-1'>Size</p>
                          <span className='inline-block px-4 py-2 bg-gray-200 rounded-lg font-semibold text-gray-900'>{item.size}</span>
                        </div>
                        <div>
                          <p className='text-gray-600 text-sm mb-1'>Quantity</p>
                          <input 
                            type="number" 
                            min={1} 
                            defaultValue={item.quantity} 
                            className='w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            onChange={(e) => (e.target.value === ' ' || e.target.value === '0') ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className='p-3 hover:bg-red-100 rounded-lg transition-colors'
                    >
                      <span className='text-2xl'>🗑️</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Summary */}
        {cartData.length > 0 && (
          <div className='flex flex-col lg:flex-row gap-8 justify-end items-start'>
            <div className='w-full lg:w-96'>
              <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 sticky top-24'>
                <CartTotal/>
                <button 
                  onClick={() => {
                    if (cartData.length > 0) {
                      navigate("/placeorder");
                    } else {
                      console.log("Your cart is empty!");
                    }
                  }}
                  className='w-full mt-6 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl'
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
