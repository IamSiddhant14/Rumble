import React from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';
import HigherOrderComponent from './HigherOrderComponent';

const VideoContainer = () => {

  const [ vid , setVid ] = useState([]);

  useEffect(() => {
   
    async function fetchVideo(){

      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVid(json.items);
    }

    fetchVideo();
  
  },[]);

  if( vid?.length === 0 ){
    return <Shimmer />;
  }
  
  return (
    
    <div className='h-screen flex flex-wrap justify-evenly'>
    { vid.length > 0 && <HigherOrderComponent ele={vid[47]} />}
    { vid.map((ele) => {
    
      return <VideoCard thumb={ele.snippet.thumbnails.medium.url} id={ele.id} key={ele.id}   title={ele.snippet.title} channel={ele.snippet.channelTitle} view ={ele.statistics.viewCount} />
    })
    }

    </div>
  )
}



export default VideoContainer ;
