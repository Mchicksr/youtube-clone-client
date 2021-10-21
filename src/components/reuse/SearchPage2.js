import React from 'react';
import './SearchPage.css'
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import VideoRow from './VideoRow'
import { useSelector } from 'react-redux';
function SearchPage2({videoId, setVideoId}) {
    const videos = useSelector((state)=>state.youtube)
    // console.log('videos',videos)
   
    // console.log('videos',videos)
    return(
    <div className="searchPage">
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneSharpIcon />
                <h2>FILTER</h2>
            </div>
        </div>
        <hr />
        {/* <Link to="/play"> */}
            {videos.map(item =>(
            <VideoRow 
                id={item.id.videoId}
                views='1.4M'
                subs='653K'
                description={item.snippet.description}
                timestamp={item.snippet.publishTime}
                channel={item.snippet.channelTitle}
                title={item.snippet.title}
                image={item.snippet.thumbnails.medium.url}
                // videoId={videoId}
                // setVideoId={setVideoId}
            />
            ))}
        {/* </Link> */}
    </div>
    )
}

export default SearchPage2;