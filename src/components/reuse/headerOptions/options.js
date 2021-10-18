import React from 'react';
import { useDispatch } from 'react-redux';
import { Button,Paper } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';


function Options({setUser}) {
    const history = useHistory()

    const dispatch = useDispatch()
 const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null)
    }
    return (
        <div>
        <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>

        </div>
    );
}

export default Options;