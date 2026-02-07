import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Order() {
    let [orderData,setOrderData] = useState([])
    let {currency} = useContext(shopDataContext)
    let {serverUrl} = useContext(authDataContext)

    const loadOrderData = async () => {
       try {
      const result = await axios.post(serverUrl + '/api/order/userorder',{},{withCredentials:true})
      if(result.data){
        let allOrdersItem = []
        result.data.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
    }

useEffect(()=>{
 loadOrderData()
},[])


  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white pt-24 pb-20 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight'>
            Your Orders
          </h1>
          <p className='text-xl text-gray-600 font-light'>Track and manage your purchases</p>
        </div>

        {/* Orders List */}
        <div className='space-y-6'>
          {orderData.length === 0 ? (
            <div className='text-center py-16 bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl'>
              <p className='text-2xl text-gray-700 font-light mb-4'>No orders yet</p>
              <button 
                onClick={() => navigate("/collection")}
                className='px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all'
              >
                Start Shopping
              </button>
            </div>
          ) : (
            orderData.map((item, index) => (
              <div 
                key={index} 
                className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex gap-6 items-start flex-col md:flex-row'>
                  {/* Product Image */}
                  <img 
                    src={item.image1} 
                    alt={item.name}
                    className='w-32 h-32 rounded-xl object-cover shadow-lg' 
                  />

                  {/* Product Details */}
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>{item.name}</h3>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-4'>
                      <div>
                        <p className='text-gray-600 text-sm mb-1 font-light'>Price</p>
                        <p className='text-xl font-bold text-gray-900'>{currency}{item.price}</p>
                      </div>
                      <div>
                        <p className='text-gray-600 text-sm mb-1 font-light'>Quantity</p>
                        <p className='text-xl font-bold text-gray-900'>{item.quantity}</p>
                      </div>
                      <div>
                        <p className='text-gray-600 text-sm mb-1 font-light'>Size</p>
                        <p className='text-xl font-bold text-gray-900'>{item.size}</p>
                      </div>
                      <div>
                        <p className='text-gray-600 text-sm mb-1 font-light'>Payment</p>
                        <p className='text-xl font-bold text-gray-900'>{item.paymentMethod}</p>
                      </div>
                    </div>

                    {/* Order Status */}
                    <div className='flex flex-wrap items-center gap-6'>\n                      <div className='flex items-center gap-2'>
                        <span className='w-2 h-2 rounded-full bg-green-500'></span>
                        <p className='text-lg font-semibold text-gray-900'>{item.status}</p>
                      </div>
                      <p className='text-gray-700 font-light'>
                        Ordered on: <span className='font-semibold'>{new Date(item.date).toDateString()}</span>
                      </p>
                    </div>
                  </div>

                  {/* Track Button */}
                  <div className='md:ml-auto'>
                    <button 
                      onClick={loadOrderData}
                      className='px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300'
                    >
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Order
