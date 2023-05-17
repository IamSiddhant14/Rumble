import React from 'react'
import { Link } from 'react-router-dom';

const RecVid = ({ thumb, title, channel , id , view }) => {

  return (
  
    <Link className="inline-block" to={`/watch?v=${id}`}>
      <div className='h-[300px]  w-auto shadow-2xl rounded-lg p-2 m-1 flex flex-wrap justify-center'>
        
        <img className=" w-auto rounded-sm shadow-xl" src={thumb} alt="thumbnail" />
        <p className='font-bold'>{title}</p>
        <p>{channel}</p>
       
      </div>
    </Link>
  )

}

export default RecVid;
