import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'

const Signup = () => {

    const navigate = useNavigate();
    
    const [user, setUser] = useState({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          country: '',
          city: '',
          user_type:''
       
      });
      
      const handleChange=(e,feild)=> {
        setUser({
          ...user, [`${feild}`]: e.target.value
        });
      }

      const handleClick = () => {
        console.log(user)
        navigate("/home")
      }

  return (
    <div className='bg-[#f3f2ee] h-screen p-10'>
        <img src={require('../assets/logo.PNG')} alt={"logo"}/>
        <div className='flex flex-col items-center bg-[#f3f2ee]'>
            <h1 className='text-3xl font-bold tracking-wide mb-5'>Make the most of your professional life</h1>
            <div className='flex flex-col items-center justify-around border w-[500px] h-[500px] bg-white'>
                <TextInput type={"text"} placeholder={"First name"} value={user.first_name} onChange={(e)=>handleChange(e,"first_name")}/>
                <TextInput type={"text"} placeholder={"Last name"}  value={user.last_name} onChange={(e)=>handleChange(e,"last_name")}/>
                <TextInput type={"text"} placeholder={"Email"} value={user.email} onChange={(e)=>handleChange(e,"email")}/>
                <TextInput type={"password"} placeholder={"Password"} value={user.password} onChange={(e)=>handleChange(e,"password")}/>
                <TextInput type={"text"} placeholder={"Country"} value={user.country} onChange={(e)=>handleChange(e,"country")}/>
                <TextInput type={"text"} placeholder={"City"} value={user.city} onChange={(e)=>handleChange(e,"city")}/>
                <select className='outline-none' value={user.user_type} onChange={(e)=>handleChange(e,"user_type")}>
                    <option>User Type</option>
                    <option value={1}>Company</option>
                    <option value={2}>Normal User</option>
                </select>
                <SubmitButton text={"Signup"} onClick={handleClick}/>
                <p>Already on LinkedIn? 
                    <span className='text-[#0b66c3] cursor-pointer' onClick={() =>{
                        navigate("/login")
                    }}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Signup