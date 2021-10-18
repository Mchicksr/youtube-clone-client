import React from 'react';
import moment from 'moment'
import {Grid,Button} from '@material-ui/core'
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {useSelector,useDispatch} from 'react-redux'
import { likePost } from '../../actions/posts';
import Likes from './Likes';
function InfoBar2({title,views,timestamp,cId,user,likes}) {
    const info = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    console.log('info',info)
    return (
        <div>
            
            <h2>{title}</h2>
            <Grid container> 
            <Grid container item xs={6}>
            <p>{`${views}${" "} · ${" "}${moment(timestamp).fromNow()}`}</p>
            </Grid> 
            <Grid container item xs={6}>
                <Button size="small" onClick={() => dispatch(likePost(cId))}><Likes likes={likes} user={user}/></Button>
                <Button size="small"><ThumbDownAltOutlined/></Button>
                {/* <Button size="small"><Likes likes={likes} user={user}/></Button> */}
                <Button><PostAddIcon/> SAVE</Button>
            </Grid> 
            </Grid>
            
        </div>
    );
}

export default InfoBar2;