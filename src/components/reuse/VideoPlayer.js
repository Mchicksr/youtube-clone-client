import React from 'react';
import { Container, Grid,Button } from '@material-ui/core'
import RecommendedVideos2 from './RecommendedVideos2'
import InfoBar from './InfoBar'
import InfoBar2 from './InfoBar2';
import {useSelector,useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';
import { likePost } from '../../actions/posts';
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import moment from 'moment'
import Likes from './Likes';



function VideoPlayer({videoId2}) {
    const location = useLocation()
    const posts = useSelector(state => state.posts)
    const videoId = location.state?.videoId
    const title = location.state?.title
    const views = location.state?.views
    const timestamp = location.state?.timestamp
    const cId = location.state?.id
    const user = location.state?.user
    const likes = location.state?.likes
    const api = location.state?.api
    const dislikes = location.state?.dislikes
    // console.log('VID', videoId) d
    // console.log('Title', title)
    console.log("VideoPlayer: videoId",videoId2)

    const info = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    console.log('info',info)
    return (
        <>
            <Grid container>
                <Grid item xs={8}>
                    <Container maxWidth="lg" className="videoP">
                        {/* {!videoId ? (<h1>Search for Video</h1>) :( */}
                    <div className="video-player">
                        <iframe
                            width="938" 
                            height="554"
                            title='Test'
                            className="video-iframe"
                            // src="https://www.youtube.com/embed/44-Kx5ZZTsY" 
                            // src={`https://www.youtube.com/embed/XAb_GjYGFs`}
                            src={`https://www.youtube.com/embed/${videoId}`}
                            
                        />
                    </div>   
                
                        <InfoBar 
                        posts={posts}
                        title={title}
                        views={views}
                        timestamp = {timestamp}
                        cId = {cId}
                        user={user}
                        likes={likes}
                        test={'test'}
                        api={api}
                        dislikes={dislikes}
                        />   
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <RecommendedVideos2 />
                </Grid>
            </Grid>
        </>
    );
}

export default VideoPlayer;


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/44-Kx5ZZTsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }