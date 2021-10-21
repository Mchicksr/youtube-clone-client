import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { TextField,Button,Paper,Container } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { deletePost } from '../../actions/posts';
import './CreateVideo'

import {createPost} from '../../actions/posts'

function CreateVideo({currentId, setCurrentId}) {
    const [postData, setPostData] = useState({title:'',message:'',tags:'',selectedFile:'',link:''})
    const post = useSelector((state)=> currentId ? state.posts.find((p)=> p._id === currentId): null)
    const user = JSON.parse(localStorage.getItem('profile'))

    // const posts = useSelector((state) =>state.posts)
    // console.log('form2',user?.result?._id)

    const dispatch = useDispatch()

    const clear = () => {
        setCurrentId(0)
        setPostData({title:'',message:'',tags:'',selectedFile:'',link:''})
    }
    useEffect(()=>{
        if(post) setPostData(post)
    },[post])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
            dispatch(createPost({...postData,name: user?.result?.name,photoId: user?.result?.selectedFile}))
        
        clear()
        
        
    }
    // console.log('form',currentId)

    return (
        <Container maxWidth="sm">
        <Paper varient="outlined" square>
        <form action="submit" onSubmit={handleSubmit}>
            <h1>{currentId ? `Editing ${post.title}` : 'Create Video'}</h1>
            <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData,title:e.target.value})}/>
            <TextField name="" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData,message :e.target.value})}/>
            <TextField name="" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags :e.target.value})}/>
            <TextField name="link" variant="outlined" label="Link" fullWidth value={postData.link} onChange={(e)=> setPostData({...postData,link :e.target.value})}/>
            <div> <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,selectedFile: base64})}/></div>
            {/* {postData.selectedFile && (<img src={URL.createObjectURL(postData.selectedFile)} alt="img" height="40px"/>) } */}
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
            <Button variant="contained" color="secondary" size="small" type="submit" fullWidth>clear</Button>
            {post ? <Button variant="contained" color="primary" size="small" type="submit" fullWidth onClick={() => dispatch(deletePost(currentId))}>Delete</Button> : null}
        </form>
        </Paper>
        </Container>
    );
}

export default CreateVideo;