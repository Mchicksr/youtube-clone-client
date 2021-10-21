import React from 'react';
import './RecommendedVideos'
import VideoCard from './videoCard';
import {useSelector} from 'react-redux'
import {parseQuery,getId} from '../../sample'

function RecommendedVideos2({currentId, setCurrentId, setVideoId,videoId }) {
    const posts = useSelector((state)=> state.posts)
    console.log('RecommendedVideo2:Video id',videoId)
    return (
        <div className="recommendedVideos">
            <div className="recommendedVideos__videos">
                {
                    !posts.length ? 'loading...' : (  
                       
                        posts.map((item) => (
                    // <Link to="/play">
                            <VideoCard
                                id = {item._id}
                                title={item.title}
                                views="10k views"
                                timestamp={item.Published}
                                channelImage='data:image/png;base64,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'
                                channel={item.tags}
                                image={item.selectedFile}
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                                setVideoId={setVideoId}
                                videoId={videoId}
                                posts={posts}
                                name={item.name}
                                link={getId(parseQuery(item.link))}
                                likes={item.likes}
                                dislikes={item.dislikes}
                                photoId={item.photoId}
                            />
                    // </Link>
                        ))
                
               
                    )}
            </div>
        </div>
    );
}

export default RecommendedVideos2;