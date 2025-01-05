import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#4DA1A9', // Set AppBar background color
        color: '#F6F4F0', // Set text color
      }}
    >
      <Toolbar>
        {/* Left side: Travel */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#F6F4F0', // Text color for title
          }}
        >
          Travel
        </Typography>

        {/* Right side: Buttons */}
        <Box>
        <Button
            component={Link}
            to="/homepage" // Link to BookingPage route
            sx={{
              color: '#F6F4F0', // Button text color
              backgroundColor: '#79D7BE', // Button background color
              marginRight: 2,
              '&:hover': {
                backgroundColor: '#4DA1A9', // Hover color
              },
            }}
          >
            HomePage
          </Button>
          <Button
            component={Link}
            to="/bookingpage" // Link to BookingPage route
            sx={{
              color: '#F6F4F0', // Button text color
              backgroundColor: '#79D7BE', // Button background color
              marginRight: 2,
              '&:hover': {
                backgroundColor: '#4DA1A9', // Hover color
              },
            }}
          >
            BookingPage
          </Button>
          <Button
            component={Link}
            to="/destinations" // Placeholder for Destinations route
            sx={{
              color: '#F6F4F0',
              backgroundColor: '#79D7BE',
              marginRight: 2,
              '&:hover': {
                backgroundColor: '#4DA1A9',
              },
            }}
          >
            Destinations
          </Button>
          <Button
            component={Link}
            to="/loginsignup" // Placeholder for Login route
            sx={{
              color: '#F6F4F0',
              backgroundColor: '#79D7BE',
              marginRight: 2,
              '&:hover': {
                backgroundColor: '#4DA1A9',
              },
            }}
          >
            LoginSignup
          </Button>
          <Button
            component={Link}
            to="/profilepage" // Placeholder for Login route
            sx={{
              color: '#F6F4F0',
              backgroundColor: '#79D7BE',
              '&:hover': {
                backgroundColor: '#4DA1A9',
              },
            }}
          >
            ProfilePage
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
