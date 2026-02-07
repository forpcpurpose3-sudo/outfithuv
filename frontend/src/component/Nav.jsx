import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from '../context/UserContext';
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { shopDataContext } from '../context/ShopContext';
function Nav() {
    let {getCurrentUser , userData} = useContext(userDataContext)
    let {serverUrl} = useContext(authDataContext)
    let {showSearch,setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext)
    let [showProfile,setShowProfile] = useState(false)
    let navigate = useNavigate()


    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
            console.log(result.data)
           
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <div className='w-full h-auto bg-white border-b border-gray-200 z-50 fixed top-0 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 shadow-sm'>

        <div className='flex items-center justify-start gap-2 sm:gap-3'>
            <img src={logo} alt="Logo" className='w-7 h-7 sm:w-8 sm:h-8' />
            <h1 className='text-base sm:text-xl md:text-2xl text-gray-900 font-bold hidden sm:block'>TheOutfitHuv</h1>
        </div>
        
        <div className='hidden md:flex flex-1 justify-center'>
            <ul className='flex items-center gap-2 lg:gap-4'>
                <li className='text-xs lg:text-sm hover:bg-gray-100 cursor-pointer bg-gray-100 text-gray-900 font-semibold py-2 px-3 lg:px-4 rounded-full' onClick={()=>navigate("/")}>HOME</li>
                <li className='text-xs lg:text-sm hover:bg-gray-100 cursor-pointer bg-gray-100 text-gray-900 font-semibold py-2 px-3 lg:px-4 rounded-full' onClick={()=>navigate("/collection")}>COLLECTIONS</li>
                <li className='text-xs lg:text-sm hover:bg-gray-100 cursor-pointer bg-gray-100 text-gray-900 font-semibold py-2 px-3 lg:px-4 rounded-full' onClick={()=>navigate("/about")}>ABOUT</li>
                <li className='text-xs lg:text-sm hover:bg-gray-100 cursor-pointer bg-gray-100 text-gray-900 font-semibold py-2 px-3 lg:px-4 rounded-full' onClick={()=>navigate("/contact")}>CONTACT</li>
            </ul>
        </div>
        
        <div className='flex items-center justify-end gap-3 sm:gap-4'>
         {!showSearch && <IoSearchCircleOutline className='w-6 h-6 sm:w-7 sm:h-7 text-gray-900 cursor-pointer hover:text-blue-600 transition' onClick={()=>{setShowSearch(prev=>!prev);navigate("/collection")}}/>}
           {showSearch && <IoSearchCircleSharp className='w-6 h-6 sm:w-7 sm:h-7 text-gray-900 cursor-pointer hover:text-blue-600 transition' onClick={()=>setShowSearch(prev=>!prev)}/>}
         {!userData && <FaCircleUser className='w-5 h-5 sm:w-6 sm:h-6 text-gray-900 cursor-pointer hover:text-blue-600 transition' onClick={()=>setShowProfile(prev=>!prev)}/>}
         {userData && <div className='w-6 h-6 sm:w-7 sm:h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs cursor-pointer hover:bg-gray-800 transition' onClick={()=>setShowProfile(prev=>!prev)}>{userData?.name.slice(0,1)}</div>}
         <div className='relative'>
           <MdOutlineShoppingCart className='w-5 h-5 sm:w-6 sm:h-6 text-gray-900 cursor-pointer hover:text-blue-600 transition hidden md:block' onClick={()=>navigate("/cart")}/>
           {getCartCount() > 0 && <span className='absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-semibold hidden md:flex'>{getCartCount()}</span>}
         </div>
        </div>
        
       {showSearch && <div className='w-full absolute top-full left-0 right-0 bg-gray-50 border-b border-gray-200 py-4 flex items-center justify-center'>
            <input type="text" className='w-3/4 sm:w-1/2 h-10 bg-white rounded-full px-6 placeholder:text-gray-400 text-gray-900 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Search here...' onChange={(e)=>{setSearch(e.target.value)}} value={search} />
        </div>}

       {showProfile && <div className='absolute top-full right-4 w-48 bg-white border border-gray-200 rounded-2xl z-50 shadow-lg mt-2'>
        <ul className='flex flex-col text-sm py-2'>
            {!userData && <li className='hover:bg-gray-100 px-4 py-3 cursor-pointer text-gray-900 font-medium' onClick={()=>{
                navigate("/login");setShowProfile(false)
            }}>Login</li>}
            {userData && <li className='hover:bg-gray-100 px-4 py-3 cursor-pointer text-gray-900 font-medium' onClick={()=>{handleLogout();setShowProfile(false)}}>Logout</li>}
            <li className='hover:bg-gray-100 px-4 py-3 cursor-pointer text-gray-900 font-medium'onClick={()=>{navigate("/order");setShowProfile(false)}} >Orders</li>
            <li className='hover:bg-gray-100 px-4 py-3 cursor-pointer text-gray-900 font-medium'onClick={()=>{navigate("/about");setShowProfile(false)}} >About</li>
        </ul>

        </div>}
        
        {/* Mobile Bottom Navigation */}
        <div className='w-full h-16 flex items-center justify-around fixed bottom-0 left-0 bg-white border-t border-gray-200 md:hidden z-40'>
            <button className='text-gray-600 flex flex-col items-center gap-1 text-xs hover:text-blue-600 transition' onClick={()=>navigate("/")}><IoMdHome className='w-5 h-5'/> Home</button>
             <button className='text-gray-600 flex flex-col items-center gap-1 text-xs hover:text-blue-600 transition' onClick={()=>navigate("collection")}><HiOutlineCollection className='w-5 h-5'/> Shop</button>
              <button className='text-gray-600 flex flex-col items-center gap-1 text-xs hover:text-blue-600 transition' onClick={()=>navigate("/contact")}><MdContacts className='w-5 h-5'/>Help</button>
               <button className='text-gray-600 relative flex flex-col items-center gap-1 text-xs hover:text-blue-600 transition' onClick={()=>navigate("/cart")}><MdOutlineShoppingCart className='w-5 h-5'/> Cart 
               {getCartCount() > 0 && <span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-semibold'>{getCartCount()}</span>}
               </button>
        </div>
    
    </div>
  )
}

export default Nav
