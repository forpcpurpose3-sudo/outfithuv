import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import axios from 'axios'
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  let [show, setShow] = useState(false)
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let {serverUrl} = useContext(authDataContext)
  let {adminData, getAdmin} = useContext(adminDataContext)
  let navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const AdminLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const result = await axios.post(serverUrl + '/api/auth/adminlogin', {email, password}, {withCredentials:true})
      console.log("Login response:", result.data)
      
      toast.success("Admin Login Successful")
      
      // Wait for admin data to be fetched
      await getAdmin()
      
      // Navigate to home page
      navigate("/")
      
    } catch (error) {
      console.log("Login error:", error)
      toast.error(error.response?.data?.message || "Admin Login Failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'>
        <img className='w-[80px]' src={logo} alt="" />
        <h1 className='text-[22px] font-sans'>TheOutfitHuv</h1>
      </div>
   
      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[25px] font-semibold'>Login Page</span>
        <span className='text-[16px]'>Welcome to TheOutfitHuv, Apply to Admin Login</span>
      </div>

      <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
        <form action="" onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
          <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
            <input 
              type="text" 
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' 
              placeholder='Email' 
              required  
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              disabled={loading}
            />
            
            <input 
              type={show ? "text" : "password"} 
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' 
              placeholder='Password' 
              required 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              disabled={loading}
            />
            
            {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={() => setShow(prev => !prev)}/>}
            {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={() => setShow(prev => !prev)}/>}
            
            <button 
              type="submit"
              className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
