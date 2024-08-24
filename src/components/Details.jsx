import * as React from 'react';
import { OutlinedInput, InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox } from '@mui/material';
import { Chip, Autocomplete } from '@mui/material';
import { Box, Container, TextField } from '@mui/material';

const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy',
    'Drama', 'Fantasy', 'Horror',
    'Mystery', 'Romance', 'Sci-Fi', 'Thriller',
];

const platforms = ['Netflix', 'Amazon Prime', 'Disney+', 'HBO Max', 'Hulu', 'Paramount+', 'Apple TV+', 'Theaters'];

export default function Details() {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const { target: { value } } = event;
        setPersonName(typeof value === 'string' ? value.split(',') : value);
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
                //bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
        >
            <TextField
                id="outlined-basic"
                label="Movies per week"
                type='number'
                variant="standard"
                size='small'
                sx={{ width: '80%' }}
            />

            <Autocomplete
                sx={{ width: '80%' }}
                size='small'
                multiple
                id="tags-standard"
                options={platforms}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Main platforms"
                    />
                )}
            />

            <Autocomplete
                sx={{ width: '80%' }}
                size='small'
                multiple
                id="tags-standard"
                options={genres}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Favorite genres"
                    />
                )}
            />
        </Box>

    );
}