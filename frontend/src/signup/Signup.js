import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'

const Signup = () => {

    const navigate = useNavigate();
    
    const [users, setUsers] = useState({
        user: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          country: '',
          city: '',
          user_type:''
        }
      });

      const handleFirstNameChange=(e)=> {
        setUsers({
          ...users,
          user: {
            ...users.user,
            first_name: e.target.value
          }
        });
      }

      const handleLastNameChange=(e)=> {
        setUsers({
          ...users,
          user: {
            ...users.user,
            last_name: e.target.value
          }
        });
      }

      const handleEmailChange=(e)=> {
        setUsers({
          ...users,
          user: {
            ...users.user,
            email: e.target.value
          }
        });
      }

      const handlePasswordChange=(e)=> {
        setUsers({
          ...users,
          user: {
            ...users.user,
            password: e.target.value
          }
        });
      }

      const handleCountryChange=(e)=> {
        setUsers({
          ...users,
          user: {
            ...users.user,
            country: e.target.value
          }
        });
      }

      const handleCityChange=(e)=> {
        setUsers({
          ...users,
          user: {
            ...users.user,
            city: e.target.value
          }
        });
      }

      const handleUserTypeChange=(e)=> {
        setUsers({
          ...users,
          user: {
            ...users.user,
            user_type: e.target.value
          }
        });
      }

      const handleClick = () => {
        console.log(users.user)
        navigate("/home")
      }

  return (
    <div className='bg-[#f3f2ee] h-screen p-10'>
        <img src={require('../assets/logo.PNG')} alt={"logo"}/>
        <div className='flex flex-col items-center bg-[#f3f2ee]'>
            <h1 className='text-3xl font-bold tracking-wide mb-5'>Make the most of your professional life</h1>
            <div className='flex flex-col items-center justify-around border w-[500px] h-[500px] bg-white'>
                <TextInput type={"text"} placeholder={"First name"} value={users.user.first_name} onChange={handleFirstNameChange}/>
                <TextInput type={"text"} placeholder={"Last name"}  value={users.user.last_name} onChange={handleLastNameChange}/>
                <TextInput type={"text"} placeholder={"Email"} value={users.user.email} onChange={handleEmailChange}/>
                <TextInput type={"password"} placeholder={"Password"} value={users.user.password} onChange={handlePasswordChange}/>
                <TextInput type={"text"} placeholder={"Country"} value={users.user.country} onChange={handleCountryChange}/>
                <TextInput type={"text"} placeholder={"City"} value={users.user.city} onChange={handleCityChange}/>
                <select className='outline-none' value={users.user.user_type} onChange={handleUserTypeChange}>
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