import React from 'react';
import {Link,useHistory} from 'react-router-dom'
import {Button} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from "@material-ui/core/Avatar"
import moment from 'moment'
import "./videoCard.css"
function VideoCard({id,image, title, channel, views, timestamp, channelImage,setCurrentId,currentId,posts,name,setVideoId,videoId,link,likes,dislikes,photoId}) {
    const user = JSON.parse(localStorage.getItem('profile'))
    let history = useHistory()
   
    return (
        <div className="videoCard">
           
            <Link 
            onClick={() => setVideoId('test')}
            to={{
                pathname:`/play/${link}`, 
                state:{
                    videoId:link,
                    title:title,
                    views:views,
                    timestamp:timestamp,
                    id:id,
                    user:user,
                    likes:likes,
                    dislikes:dislikes
                }
                }}>

            <img className="videoCard__Thumbnail" src={image} alt="" />   
            
            </Link>
            <div className="videoCard__info">
            <Link to={{pathname:`/play/${link}`, state:{videoId:link, title:title,views:views,timestamp:timestamp,id:id,user:user,likes:likes}}}>

                {photoId 
                        ? <Avatar className="videoCard__avatar" alt={channel} src= {photoId}/>
                         :<Avatar className="videoCard__avatar" alt={channel} src= {channelImage}/>
                }

            <div className="videoCard__text">
                <h4>{title}</h4>
                {!name ? (<p>{channel}</p>) : (<p>{name}</p>)}
                
                <p>
                    {views} {moment(timestamp).fromNow()}
                </p>
            </div>
            </Link>
                {/* <Button size="small" onClick={()=>setCurrentId(id),console.log('click',currentId)}> */}
                <Button size="small" onClick={() => {return setCurrentId(id), history.push('/edit')}}>
                    <MoreVertIcon fontSize='default'/>
                </Button>
            </div>
            {/* <Button size="small" onClick={() => dispatch(likePost(id))}> */}
                {/* <ThumbUpAltOutlined/> &nbsp; {likes}&nbsp; */}
                {/* <Likes likes={likes} user={user}/> */}
                {/* </Button> */}

        </div>
    );
}

export default VideoCard;