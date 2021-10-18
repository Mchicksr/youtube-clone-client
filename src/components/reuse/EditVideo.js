import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { TextField,Button } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { deletePost,updatePost } from '../../actions/posts';
import { useHistory } from 'react-router';
import './CreateVideo'

import {createPost} from '../../actions/posts'
// import { updatePost } from '../../api';
function EditVideo({currentId, setCurrentId}) {
    const [postData, setPostData] = useState({title:'',message:'',tags:'',selectedFile:''})
    const post = useSelector((state)=> currentId ? state.posts.find((p)=> p._id === currentId): null)
    const dispatch = useDispatch()
    const history = useHistory()

    // console.log('CV',currentId)
    const clear = () => {
        setCurrentId(0)
        setPostData({title:'',message:'',tags:'',selectedFile:''})
    }
    useEffect(()=>{
        if(post) setPostData(post)
    }
    ,[]
    // ,[post]
    )
    const handleSubmit = async (e) => {
        e.preventDefault()
        
            dispatch(updatePost(currentId,postData))
       
        clear()
        history.push('/')
    }
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>{`Editing ${post?.title}`}</h1>
            <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData,title:e.target.value})}/>
            <TextField name="" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData,message :e.target.value})}/>
            <TextField name="" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags :e.target.value})}/>
            <TextField name="link" variant="outlined" label="Link" fullWidth value={postData.link} onChange={(e)=> setPostData({...postData,link :e.target.value})}/>

            <div> <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,selectedFile: base64})}/></div>
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
            <Button variant="contained" color="secondary" size="small" type="submit" fullWidth>clear</Button>
            {post ? <Button variant="contained" color="primary" size="small" type="submit" fullWidth onClick={() => dispatch(deletePost(currentId))}>Delete</Button> : null}

        </form>
    );
}

export default EditVideo;