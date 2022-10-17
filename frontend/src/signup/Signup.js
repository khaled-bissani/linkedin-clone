import React from 'react'
import { useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'

const Signup = () => {
    
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

      function handleFirstNameChange(e) {
        setUsers({
          ...users,
          user: {
            ...users.user,
            first_name: e.target.value
          }
        });
      }

      function handleLastNameChange(e) {
        setUsers({
          ...users,
          user: {
            ...users.user,
            last_name: e.target.value
          }
        });
      }

      function handleEmailChange(e) {
        setUsers({
          ...users,
          user: {
            ...users.user,
            email: e.target.value
          }
        });
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
                <TextInput type={"text"} placeholder={"Password"} />
                <TextInput type={"text"} placeholder={"Country"} />
                <TextInput type={"text"} placeholder={"City"} />
                <select className='outline-none'>
                    <option>User Type</option>
                    <option value={1}>Company</option>
                    <option value={2}>Normal User</option>
                </select>
                <SubmitButton text={"Signup"} />
                <p>Already on LinkedIn? <span className='text-[#0b66c3]'>Sign in</span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup