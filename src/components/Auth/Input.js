import React from 'react';
import {TextField, Grid, InputAdornment, IconButton} from'@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

function Input({name,handleChange,label,autoFocus,type,half,handleShowPassword}) {
    return (
        <div>
            <Grid item xs={12} s={half ? 6 : 12}>
                <TextField
                    name={name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    label={label}
                    autoFocus={autoFocus}
                    type={type}
                    InputProps={name === 'password' ? {
                        endAdornment:(
                            <InputAdornment>
                                <IconButton onClick={handleShowPassword}>
                                    {type === "password" ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        )
                    }:null}
                />
            </Grid>
        </div>
    );
}

export default Input;