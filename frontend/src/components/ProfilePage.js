import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
  createTheme,
  Grid,
  Card,
} from "@mui/material";
import { useHistory } from "react-router-dom"; // For v5

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

const ProfilePage = () => {
  const history = useHistory(); // Use history for navigation
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate authentication
  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
    gender: "Male",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/150",
    location: "New York, USA",
    travelsCompleted: 12,
    favoriteSpots: ["Paris", "Tokyo", "Sydney"],
    walletBalance: 250,
  });

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  const handleEditOpen = () => {
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSaveChanges = () => {
    setUser({ ...editData });
    setEditDialogOpen(false);
  };

  // Redirect to login if not logged in
  if (!isLoggedIn) {
    history.push("/login");
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: "30px", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
        {isLoggedIn && (
          <>
            {/* Profile Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                marginBottom: "30px",
              }}
            >
              <Avatar
                src={user.profilePicture}
                alt={user.name}
                sx={{ width: 120, height: 120, marginRight: "20px" }}
              />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {user.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {user.email}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Age: {user.age} | Gender: {user.gender}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Location: {user.location}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginTop: "10px" }}
                  onClick={handleEditOpen}
                >
                  Edit Profile
                </Button>
              </Box>
            </Box>

            {/* Additional Info Section */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    padding: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Travels Completed
                  </Typography>
                  <Typography variant="h4" sx={{ color: "#007bff", marginTop: "10px" }}>
                    {user.travelsCompleted}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    padding: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Wallet Balance
                  </Typography>
                  <Typography variant="h4" sx={{ color: "#007bff", marginTop: "10px" }}>
                    ${user.walletBalance}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    padding: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Favorite Spots
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: "10px" }}>
                    {user.favoriteSpots.join(", ")}
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* Edit Profile Dialog */}
            <Dialog open={editDialogOpen} onClose={handleEditClose}>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogContent>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  value={editData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Age"
                  name="age"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={editData.age}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Gender"
                  name="gender"
                  fullWidth
                  margin="normal"
                  value={editData.gender}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  margin="normal"
                  value={editData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Profile Picture URL"
                  name="profilePicture"
                  fullWidth
                  margin="normal"
                  value={editData.profilePicture}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Location"
                  name="location"
                  fullWidth
                  margin="normal"
                  value={editData.location}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Favorite Spots (comma-separated)"
                  name="favoriteSpots"
                  fullWidth
                  margin="normal"
                  value={editData.favoriteSpots.join(", ")}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      favoriteSpots: e.target.value.split(",").map((spot) => spot.trim()),
                    })
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleEditClose} color="secondary">
                  Cancel
                </Button>
                <Button onClick={handleSaveChanges} color="primary">
                  Save Changes
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ProfilePage;
