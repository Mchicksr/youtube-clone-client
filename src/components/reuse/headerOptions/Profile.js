import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import FileBase from 'react-file-base64'
import { TextField,Button,Paper,Container } from '@material-ui/core';

import {updateProfile} from '../../../actions/auth'
function Profile(props) {
    const dispatch = useDispatch()
    const  profile = useSelector((state) => state.profile)
    const [updatePro, setUpdatePro] = useState({selectedFile:''})
    const user = JSON.parse(localStorage.getItem('profile'))
        // console.log('profileId',user?.result?._id)
    const userId = user?.result?._id
    const handleSubmit = async (e) => {
        e.preventDefault()
            dispatch(updateProfile(userId,updatePro))
    }
    return (
        <Container maxWidth="sm">
            <Paper variant="outlined" square>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Choose Profile Photo</h1>
                    <FileBase type="file" multiple={false} onDone={({base64})=> setUpdatePro({...updatePro,selectedFile: base64})}/>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>

                </form>
            </Paper>
        </Container>
    );
}

export default Profile;