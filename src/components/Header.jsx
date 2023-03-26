import React from 'react'

const Header = () => {
  return (
    // instead of process.env like in CRA, use import.meta.env
    <div>{import.meta.env.VITE_API_URL}</div>
  )
}

export default Header