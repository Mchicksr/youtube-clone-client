import React from 'react';
import { Container, Grid } from '@material-ui/core'
import RecommendedVideos2 from './RecommendedVideos2'
import InfoBar from './InfoBar'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'




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

    const info = useSelector((state) => state.posts)
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


