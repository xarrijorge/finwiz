import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import GradingIcon from '@mui/icons-material/Grading';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as NavLink } from 'react-router-dom';

export default function CreateScore({createData}) {
  const [record, setRecord] = useState({});
 
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'royalblue' }}>
          <GradingIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Please Enter Your Information
        </Typography>
        <Typography component='p'>
          Please input all data in numeric format
        </Typography>
        <Box component='form' noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Sales Data'
            name='sales'
            autoComplete='sales'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='expense'
            label='Expense Data'
            type='text'
            id='expense'
            autoComplete='expense'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='expense'
            label='Location'
            type='text'
            id='expense'
            autoComplete='expense'
          />

         <span>
            <Button
              onClick={createData}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}>
              Record
            </Button>
            <a href='/generate'>Go back to Home</a>
            </span>
        </Box>
      </Box>
    </Container>
  );
}
