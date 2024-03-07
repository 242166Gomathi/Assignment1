import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import useFetchUserData from './useFetchUserData';
import { CircularProgress, Container, Typography, Box } from '@mui/material';

const Profile = () => {
  const { username } = useContext(UserContext);
  const { data, loading, error } = useFetchUserData();

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="body1" color="error">Error: {error}</Typography>;

  return (
    <Container maxWidth="md">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <Typography variant="h2" gutterBottom>Welcome {username}</Typography>
        <Typography variant="body1">Name: {data.name}</Typography>
        <Typography variant="body1">Country: {data.country}</Typography>
        <Typography variant="body1">Gender: {data.gender}</Typography>
        <Typography variant="body1">PAN: {data.pan}</Typography>
      </Box>
    </Container>
  );
};

export default Profile;
