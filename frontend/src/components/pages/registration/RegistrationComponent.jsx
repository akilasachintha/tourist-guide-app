import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const RegistrationComponent = ({ handleClose }) => {
//   const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <form  onSubmit={handleSubmit}>
        <TextField
        label="First Name"
        variant="outlined"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        style={{display: 'flex',margin:'20px'}}
      />
      <br />
      <TextField
        label="Last Name"
        variant="outlined"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        style={{display: 'flex',margin:'20px'}}
      />
      <br />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{display: 'flex',margin:'20px'}}
      />
      <br />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{display: 'flex',margin:'20px'}}
      />
      <br/>
      <div>
        <Button type="submit" variant="contained" color="success" style={{display: 'flex',margin:'20px'}}>
          SUBMIT
        </Button>
      </div>
    </form>
  );
};

export default RegistrationComponent;