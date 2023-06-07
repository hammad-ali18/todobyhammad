import React from 'react'

const Button = (...prop:any) => {
  return (
    <div>
    <button onClick={prop}>{prop.children}</button>
    </div>
  )
}

export default Button