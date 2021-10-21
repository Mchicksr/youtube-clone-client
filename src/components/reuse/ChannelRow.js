import React from 'react';
import { Avatar } from "@material-ui/core"
import'./ChannelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleSharp';

function ChannelRow({image, channel, verified, subs, NoOfVideos, description}) {
    return (
        <div className="ChannelRow">
            <Avatar className="channelRow__logo" 
            alt={channel} src={image}
            />
            <div className="channelRow__text">
            <h4>{channel} {verified && <VerifiedIcon />}</h4>
            <p>
                {subs} subscribers {NoOfVideos} videos
            </p>
            <p>{description}</p>
            </div>
            <hr/>

        </div>
    );
}

export default ChannelRow;