import React from 'react'

const Input = (props) => {
  return (
    <input
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    className="py-2 px-5 w-80 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] placeholder:text-black/70 outline-none"
  />
  )
}

export default Input