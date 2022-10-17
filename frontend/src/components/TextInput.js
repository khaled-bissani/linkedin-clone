import React from 'react'

const TextInput = ({type,placeholder,value,onChange}) => {

  return (
    <div>
        <input value={value} onChange={onChange} className="border rounded-md outline-none w-[300px] h-[40px] pl-4" type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextInput