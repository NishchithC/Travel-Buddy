import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Grid, Button, Dialog, Rating, Chip, IconButton } from '@mui/material';
import { PlusCircle, Edit, Trash2, MapPin, Calendar, DollarSign } from 'lucide-react'; // Make sure to import the correct icons
import TripForm from './TripForm';

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);

  // Fetch trips from backend (simulated here)
  useEffect(() => {
    // Simulating a backend fetch call
    const fetchTrips = async () => {
      const response = await fetch('/api/trips/user/1'); // Make sure your backend API is correct
      const data = await response.json();
      setTrips(data);
    };
    
    fetchTrips();
  }, []);

  const handleEdit = (trip) => {
    setEditingTrip(trip);
    setOpenForm(true);
  };

  const handleDelete = (tripId) => {
    setTrips(trips.filter((trip) => trip.id !== tripId));
  };

  const handleSave = (tripData) => {
    if (editingTrip) {
      setTrips(trips.map((trip) => (trip.id === editingTrip.id ? { ...trip, ...tripData } : trip)));
    } else {
      setTrips([...trips, { ...tripData, id: Date.now() }]);
    }
    setOpenForm(false);
    setEditingTrip(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" component="h1">
          My Trips
        </Typography>
        <Button
          variant="contained"
          startIcon={<PlusCircle />}
          onClick={() => setOpenForm(true)}
        >
          Create New Trip
        </Button>
      </Box>

      <Grid container spacing={3}>
        {trips.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
            No trips found. Please add a new trip.
          </Typography>
        ) : (
          trips.map((trip) => (
            <Grid item xs={12} md={6} lg={4} key={trip.id}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" component="h2">
                      {trip.title}
                    </Typography>
                    <Box>
                      <IconButton size="small" onClick={() => handleEdit(trip)}>
                        <Edit size={18} />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDelete(trip.id)}>
                        <Trash2 size={18} />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <MapPin size={16} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {trip.location}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Calendar size={16} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DollarSign size={16} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      Budget: ${trip.budget}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Rating value={trip.rating} readOnly size="small" />
                    <Chip
                      label={trip.status}
                      color={trip.status === 'Upcoming' ? 'primary' : 'secondary'}
                      size="small"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      <Dialog
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setEditingTrip(null);
        }}
        maxWidth="sm"
        fullWidth
      >
        <TripForm
          onSave={handleSave}
          onCancel={() => {
            setOpenForm(false);
            setEditingTrip(null);
          }}
          initialData={editingTrip}
        />
      </Dialog>
    </Box>
  );
};

export default MyTrips;
