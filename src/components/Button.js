import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({val}) => {
  return (
    <div>
      <button className=' h-10 w-20 hover:bg-slate-600 transition duration-300 cursor-pointer  bg-slate-400 rounded-xl text-slate-50 font-bold m-2 '><Link to={`https://www.youtube.com/${val}` }>{val}</Link> </button>
    </div>
  )
}

export default Button ;
