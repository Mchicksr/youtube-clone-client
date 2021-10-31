import React from 'react';
import moment from 'moment'
import {Grid,Button} from '@material-ui/core'
import PostAddIcon from '@material-ui/icons/PostAdd';
import {useSelector,useDispatch} from 'react-redux'
import { likePost, dislikePost } from '../../actions/posts';
import Likes from './Likes';
import Dislikes from '../Dislikes';

function InfoBar({title,views,timestamp,cId,user,likes,api,dislikes}) {
    const info = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    return (
        <div>
            
            <h2>{title}</h2>
            <Grid container> 
            <Grid container item xs={6}>
            <p>{`${views}${" "} · ${" "}${moment(timestamp).fromNow()}`}</p>
            </Grid> 
            <Grid container item xs={6}>
            {
                    !api ? ( 
                        <>
                <Button size="small" onClick={() => dispatch(likePost(cId))}><Likes likes={likes} user={user}/></Button>
                <Button size="small" onClick={() => dispatch(dislikePost(cId))}><Dislikes dislikes={dislikes} user={user} /></Button>
                        </>
                ) : null
                }
                {/* <Button size="small"><Likes likes={likes} user={user}/></Button> */}
                <Button><PostAddIcon/> SAVE</Button>
            </Grid> 
            </Grid>
            
        </div>
    );
}

export default InfoBar;