import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import razorpay from '../assets/Razorpay.jpg'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

function PlaceOrder() {
    let [method,setMethod] = useState('cod')
    let navigate = useNavigate()
    const {cartItem , setCartItem , getCartAmount , delivery_fee , products } = useContext(shopDataContext)
    let {serverUrl} = useContext(authDataContext)
    let [loading ,setLoading] = useState(false)

    let [formData,setFormData] = useState({
        firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pinCode:'',
    country:'',
    phone:''
    })

    const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({...data,[name]:value}))
    }

    const initPay = (order) =>{
        const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name:'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response)
    const {data} = await axios.post(serverUrl + '/api/order/verifyrazorpay',response,{withCredentials:true})
    if(data){
        navigate("/order")
        setCartItem({})

    }
      }}
    const rzp = new window.Razorpay(options)
    rzp.open()
   }

    
     const onSubmitHandler = async (e) => {
        
    setLoading(true)
        e.preventDefault()
    try {
      let orderItems = []
      for(const items in cartItem){
        for(const item in cartItem[items]){
          if(cartItem[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
               itemInfo.size = item
               itemInfo.quantity = cartItem[items][item]
               orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee
      }
      switch(method){
        case 'cod': 
      
        const result = await axios.post(serverUrl + "/api/order/placeorder" , orderData , {withCredentials:true})
        console.log(result.data)
        if(result.data){
            setCartItem({})
            toast.success("Order Placed")
            navigate("/order")
            setLoading(false)

        }else{
            console.log(result.data.message)
            toast.error("Order Placed Error")
             setLoading(false)
        }

        break;

        case 'razorpay':
        const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay" , orderData , {withCredentials:true})
        if(resultRazorpay.data){
          initPay(resultRazorpay.data)
           toast.success("Order Placed")
           setLoading(false)
        }

        break;




        default:
        break;

      }
    
      
    } catch (error) {
      console.log(error)
    
    }
     }
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#2d1b4e] flex items-center justify-center py-6 sm:py-10 px-3 sm:px-4'>
      <div className='w-full max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start'>
          
          {/* Left - Delivery Form */}
          <div className='bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/40 shadow-2xl'>
            <form onSubmit={onSubmitHandler} className='space-y-4 sm:space-y-6'>
              <div className='pb-3 sm:pb-4 border-b border-white/10'>
                <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
              </div>

              {/* Name Fields */}
              <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                <input 
                  type="text" 
                  placeholder='First name' 
                  className='h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                  required  
                  onChange={onChangeHandler} 
                  name='firstName' 
                  value={formData.firstName}
                />
                <input 
                  type="text" 
                  placeholder='Last name' 
                  className='h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                  required 
                  onChange={onChangeHandler} 
                  name='lastName' 
                  value={formData.lastName}
                />
              </div>

              {/* Email */}
              <input 
                type="email" 
                placeholder='Email address' 
                className='w-full h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                required 
                onChange={onChangeHandler} 
                name='email' 
                value={formData.email}
              />

              {/* Street */}
              <input 
                type="text" 
                placeholder='Street address' 
                className='w-full h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                required 
                onChange={onChangeHandler} 
                name='street' 
                value={formData.street}
              />

              {/* City & State */}
              <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                <input 
                  type="text" 
                  placeholder='City' 
                  className='h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                  required 
                  onChange={onChangeHandler} 
                  name='city' 
                  value={formData.city}
                />
                <input 
                  type="text" 
                  placeholder='State' 
                  className='h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                  required 
                  onChange={onChangeHandler} 
                  name='state' 
                  value={formData.state}
                />
              </div>

              {/* Pincode & Country */}
              <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                <input 
                  type="text" 
                  placeholder='Pincode' 
                  className='h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                  required 
                  onChange={onChangeHandler} 
                  name='pinCode' 
                  value={formData.pinCode}
                />
                <input 
                  type="text" 
                  placeholder='Country' 
                  className='h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                  required 
                  onChange={onChangeHandler} 
                  name='country' 
                  value={formData.country}
                />
              </div>

              {/* Phone */}
              <input 
                type="text" 
                placeholder='Phone number' 
                className='w-full h-11 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white text-xs sm:text-sm px-3 sm:px-4 border border-gray-200 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition duration-200'
                required 
                onChange={onChangeHandler} 
                name='phone' 
                value={formData.phone}
              />

              {/* Submit Button */}
              <button 
                type='submit' 
                className='w-full h-12 sm:h-13 mt-6 sm:mt-8 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3 border border-gray-200'
              >
                {loading ? <Loading/> : "PLACE ORDER"}
              </button>
            </form>
          </div>

          {/* Right - Payment Summary & Method */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Order Summary */}
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/40 shadow-2xl'>
              <CartTotal/>
            </div>

            {/* Payment Method */}
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/40 shadow-2xl'>
              <div className='pb-4 sm:pb-6 border-b border-white/10'>
                <Title text1={'PAYMENT'} text2={'METHOD'}/>
              </div>

              <div className='grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6'>
                {/* Razorpay */}
                <button 
                  onClick={()=>setMethod('razorpay')} 
                  className={`h-16 sm:h-20 rounded-lg sm:rounded-2xl p-2 sm:p-4 transition-all duration-300 ${
                    method === 'razorpay' 
                      ? 'border-2 border-blue-500 bg-blue-500/20 shadow-xl shadow-blue-500/30' 
                      : 'border-2 border-gray-200 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <img src={razorpay} className='w-full h-full object-contain' alt="Razorpay" />
                </button>

                {/* Cash on Delivery */}
                <button 
                  onClick={()=>setMethod('cod')} 
                  className={`h-16 sm:h-20 rounded-lg sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-4 font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center ${
                    method === 'cod' 
                      ? 'border-2 border-blue-500 bg-blue-500/20 text-white shadow-xl shadow-blue-500/30' 
                      : 'border-2 border-gray-200 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  CASH ON DELIVERY
                </button>
              </div>

              {/* Payment Info */}
              <div className='mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl'>
                <p className='text-white/70 text-xs sm:text-sm leading-relaxed'>
                  {method === 'razorpay' 
                    ? '✓ Secure payment with Razorpay. Your order will be confirmed after successful payment.'
                    : '✓ Pay when you receive your order. No additional charges.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
