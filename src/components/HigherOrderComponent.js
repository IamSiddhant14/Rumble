import React from 'react'
import VideoCard from './VideoCard'

const HigherOrderComponent = ({ele}) => {
  return (
    <div className='border border-red-600 flex flex-col'>
      <span>ADV</span>
      <VideoCard thumb={ele.snippet.thumbnails.medium.url} id={ele.id}  title={ele.snippet.title} channel={ele.snippet.channelTitle} view ={ele.statistics.viewCount}/>
    </div>
  )
}

export default HigherOrderComponent
