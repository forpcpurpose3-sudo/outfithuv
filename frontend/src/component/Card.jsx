import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name , image , id , price}) {
    let {currency} = useContext(shopDataContext)
    let navigate = useNavigate()
  return (
    <div className='w-[300px] max-w-[90%] h-[400px] bg-white/50 backdrop-blur-xl rounded-xl hover:shadow-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-gray-200 transition-all duration-300' onClick={()=>navigate(`/productdetail/${id}`)}>
        <img src={image} alt="" className='w-[100%] h-[80%] rounded-lg object-cover'/>
        <div className='text-gray-900 font-bold text-[18px] py-[10px]'>{name}</div>
        <div className='text-gray-700 text-[14px] font-light'>{currency} {price}</div>
      
    </div>
  )
}

export default Card
