import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ thumb, title, channel , id , view }) => {

  return (
   
    <Link className="inline-block" to={`/watch?v=${id}`}>
      <div className='h-[268px]  w-60 shadow-2xl rounded-lg p-2 m-2 flex  flex-wrap justify-start'>
        
        <img className=" w-auto rounded-sm shadow-xl" src={thumb} alt="thumbnail" />
        <p className='font-bold'>{title}</p>
        <p>{channel}</p>
        {/* <p>{view}</p> */}
      </div>
    </Link>
  )

}

export default VideoCard;
