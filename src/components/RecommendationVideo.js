import React from 'react'
import VideoCard from './VideoCard';
import { RELATED_VIDEO_ID } from '../utils/constants';
import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';
import RecVid from './RecVid';


const RecommendationVideo = () => {

  const [ vid , setVid ] = useState([]);

  useEffect(() => {
   
    async function fetchVideo(){

      const data = await fetch(RELATED_VIDEO_ID);
      const json = await data.json();
      setVid(json.items);
    }

    fetchVideo();
  
  },[]);

  if( vid?.length === 0 ){
    return <Shimmer />;
  }
  
  return (
    
    <div className= 'flex flex-col '>
    { vid.map((ele) => {
      
      return <RecVid thumb={ele.snippet.thumbnails.medium.url} id={ele.id} key={ele.id}   title={ele.snippet.title} channel={ele.snippet.channelTitle} view ={ele.statistics.viewCount} />
    })
    }

    </div>
  )
}

export default RecommendationVideo ;
