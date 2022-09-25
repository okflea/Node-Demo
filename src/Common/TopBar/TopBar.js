import React from 'react';
import { useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import Icon from '@mui/material/Icon';

export default function TopBar() {
    let navigate = useNavigate();

    const navigateToUser = () => {
        navigate("/user");
    }
    const navigateToHome = () => {
        navigate("/");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToHome} >
                        My App
                    </Typography>
                    <Button color="inherit" onClick={navigateToHome}>Home</Button>
                    <Button color="inherit" onClick={navigateToUser}>Add User</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
