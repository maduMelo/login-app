import * as React from 'react';
import { Box, Autocomplete, TextField } from '@mui/material';

const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy',
    'Drama', 'Fantasy', 'Horror',
    'Mystery', 'Romance', 'Sci-Fi', 'Thriller',
];

const platforms = ['Amazon Prime', 'Apple TV+', 'Disney+', 'HBO Max', 'Hulu', 'Netflix', 'Paramount+', , 'Theaters'];

export default function Details({ userData, setUserData }) {

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setUserData({ ...userData, [id]: value });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5vw',
                marginTop: '-52vh',
                height: '40vh',
                minHeight: '200px',
            }}
        >
            <TextField
                id="moviesPerWeek"
                label="Movies per week"
                type='number'
                variant="standard"
                size='small'
                sx={{ width: '80%' }}

                value={userData.moviesPerWeek}
                onChange={handleInputChange}
            />

            <Autocomplete
                sx={{ width: '80%' }}
                size='small'
                multiple
                id="platforms"

                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Main platforms"
                    />
                )}

                options={platforms}
                value={userData.platforms}
                onChange={ (event, newValue) => setUserData({ ...userData, platforms: newValue }) }
            />

            <Autocomplete
                sx={{ width: '80%' }}
                size='small'
                multiple
                id="genres"

                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Favorite genres"
                    />
                )}

                options={genres}
                value={userData.genres}
                onChange={ (event, newValue) => setUserData({ ...userData, genres: newValue }) }
            />
        </Box>

    );
}