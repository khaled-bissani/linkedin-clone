import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
      email: '',
      password: ''   
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
            <div className='flex flex-col items-center justify-around border w-[400px] h-[400px] bg-white'>
                <h1 className='text-3xl font-bold tracking-wide mb-5'>Sign in</h1>
                <TextInput type={"text"} placeholder={"Email"} value={user.email} onChange={(e)=>handleChange(e,"email")}/>
                <TextInput type={"password"} placeholder={"Password"}  value={user.password} onChange={(e)=>handleChange(e,"password")}/>
                <SubmitButton text={"Login"} onClick={handleClick}/>
                <p>New to LinkedIn? 
                    <span className='text-[#0b66c3] cursor-pointer' onClick={() =>{
                        navigate("/")
                    }}>
                        Join now
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login