import React from 'react';
import axios from 'axios';

import { Box, Typography } from '@mui/material';


export default function Profile() {
    const token = localStorage.getItem('token');
    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
            }
            catch (e) { console.error(e) };
        };
        
        fetchData();
    }, [token]);

    const UserProfile = () => {
        return (
            <Box>
                <Box sx={{ width: '100px', height: '100px', display: 'flex'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4128/4128335.png" alt="" />
                </Box>
                <br />
                <Typography>{userData.username} | {userData.email}</Typography>
                <br />
                <Typography>Hi, my name is {userData.firstName} {userData.lastName}, I'm {userData.age} years old and I always end up watching around {userData.moviesPerWeek} movies per week. My favorite genres are {userData.genres.join(', ')} that I usually watch on {userData.platforms.join(', ')}.</Typography>
            </Box>
        );
    };

    return (
        <div>
            {
                userData ?
                <UserProfile /> :
                <div>Unauthorized</div>
            }
        </div>
        
    );
};