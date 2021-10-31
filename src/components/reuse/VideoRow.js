import React from 'react';
import { Link } from 'react-router-dom';
import './VideoRow.css';

function VideoRow({id,views, subs, description,timestamp, channel, title, image}) {
    console.log('videoIs',id)
    const api = 'DNU'
   
    return (
        <div className="videoRow">
            <Link to={{pathname:`/play/${id}`,state:{videoId:id, title:title, views:views,timestamp:timestamp,api }}}>
                <img src={image} alt=""/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} <span span className="videoRow__subs">
                        <span className="videoRow__subsNumber">{subs}
                        </span> Subscribers </span> 
                    {views} views {timestamp}
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
            </Link>
        </div>
    );
}

export default VideoRow;