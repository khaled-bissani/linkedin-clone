import React from 'react'
import { useState } from 'react';

const TextInput = ({type,placeholder}) => {

  const [value, setValue] = useState('');

  const handleValue= event => {
    setValue(event.target.value);
  }
  console.log(value)

  return (
    <div>
        <input value={value} onChange={handleValue} className="border rounded-md outline-none w-[300px] h-[40px] pl-4" type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextInput