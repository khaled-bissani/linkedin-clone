import React from 'react'

const SubmitButton = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className='border rounded-full text-white bg-[#0b66c3] w-[300px] h-[40px]'>{text}</button>
    </div>
  )
}

export default SubmitButton