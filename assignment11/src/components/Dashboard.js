import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress, Container, Box, Typography } from '@mui/material';
import { UserContext } from './UserContext';
import useFetchUserData from './useFetchUserData';
import styles from '../styles/Dashboard.css';

const Dashboard = () => {
  const { username } = useContext(UserContext);
  const { loading, error } = useFetchUserData();

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container maxWidth="md">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginTop: '30px',
        position: 'relative', 
      }}>
        <Typography variant="h3" fontWeight="bold" style={{ textAlign: 'center' }}>Welcome to Our Dashboard {username}</Typography><br></br>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Link to="/profile" className="profile-link">Profile</Link>
        </div>
      </Box>
    </Container>
  );
};

export default Dashboard;
