import Header from '../components/Header';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';
import useAuth from "../hooks/useAuth";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import Footer from '../components/Footer';

const steps = [
    'Vet appointment',
  'Rabbies vaccine',
  'Sorology test',
  'Vet CheckUp',
  'Send documents',
  'Travel'
];

export default function Profile() {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    function handleSignOut(){
        signOut();
        navigate('/')
    }
  return (
      <>
    <Header />
    <Button onClick={handleSignOut}
                sx = {{
                    marginRight: 0,
                    marginLeft: '90%'
                }}>Sign Out</Button>
    <Box sx={{ 
        width: '100%',
        marginTop: 10 }}>
            
      <Stepper activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

        <Typography
            variant='h6'
            sx = {{
                textAlign: 'center',
                marginTop: 10
            }}>
            The blood sample was sent to the laboratory.
        </Typography>
    </Box>
    <Footer />
    </>
  );
}