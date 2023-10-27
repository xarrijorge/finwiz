import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Generate = ({ user = 'Broomstick', score = +10 }) => {
  return (
    <div className='generate'>
      <h1>Hello {user}</h1>
      <h3>Your current credit score is {score}</h3>
      <Link to='/creditscore'>
        <p>
          <Button variant='contained'>Add Transaction</Button>
        </p>
        <p>
          <Button variant='contained' color='red'>
            Link an ABSA Account
          </Button>
        </p>
      </Link>
    </div>
  );
};

export default Generate;
