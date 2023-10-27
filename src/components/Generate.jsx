import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Generate = ({ user = 'Alex', score = +10 }) => {
  return (
    <div className='generate'>
      <h1>Welcome, {user}</h1>
      <h3>Your current credit score is {score}</h3>
      <Link to='/creditscore'>
        <p>
          <Button variant='contained'>Add Transaction</Button>
        </p>
      </Link>
      <p>
        <Link to='https://www.absa.com.gh/personal/'>
          <Button variant='contained' color='error'>
            Link an ABSA Account
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default Generate;
