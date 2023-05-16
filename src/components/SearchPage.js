import React from 'react'
import VideoCard from './VideoCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const VideoContainer = () => {

    const [vid, setVid] = useState([]) ;
    let { term } = useParams() ;

    useEffect(() => {

        async function fetchVideo() {

            const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&maxResults=200&key=AIzaSyC6kHjMyXPylbJdRXuRB6AWmzwZqyTmNNw `);
            const json = await data.json();
            setVid(json.items);

        }

        fetchVideo();

    }, [term]);

    if (vid?.length === 0) {
        return <Shimmer />;
    }

    return (

        <div className='h-screen flex flex-wrap justify-evenly mt-20 bg-white'>

            {vid.map((ele , i) => {
                
                return <VideoCard thumb={ele.snippet.thumbnails.medium.url} id={ele.id.videoId} key={i} title={ele.snippet.title} channel={ele.snippet.channelTitle}  />
            })
            }

        </div>
    )
}



export default VideoContainer;
