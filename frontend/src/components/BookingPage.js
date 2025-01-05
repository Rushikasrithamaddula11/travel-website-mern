import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  ThemeProvider,
  createTheme,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

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

const destinations = [
  { name: "Paris, France", image: "https://tse1.mm.bing.net/th?id=OIP.GKgfLusgjmdjrWULpl8f3gHaLH&pid=Api&P=0&h=180" },
  { name: "New York City, USA", image: "https://tse3.mm.bing.net/th?id=OIP.Sf1kiERiiyeyWQxeQBtiVAHaE8&pid=Api&P=0&h=180" },
  { name: "Tokyo, Japan", image: "https://tse2.mm.bing.net/th?id=OIP.zfuQN48hniTpm8Uap_DN0QHaEK&pid=Api&P=0&h=180" },
  { name: "Rome, Italy", image: "https://tse4.mm.bing.net/th?id=OIP.07GaM9O0N4SG-1TpOuxnrQHaE8&pid=Api&P=0&h=180" },
  { name: "London, UK", image: "https://tse1.mm.bing.net/th?id=OIP.yYEjbzhfooHzINJb2mcc1gHaFj&pid=Api&P=0&h=180" },
  { name: "Sydney, Australia", image: "https://tse1.mm.bing.net/th?id=OIP.x-OIRj6seBewJoR-v-nK1wHaE7&pid=Api&P=0&h=180" },
  { name: "Dubai, UAE", image: "https://tse2.mm.bing.net/th?id=OIP.wtdDfABymAKOThuPB-EtiwHaEK&pid=Api&P=0&h=180" },
  { name: "Cape Town, South Africa", image: "https://tse2.mm.bing.net/th?id=OIP.UZGmfevPA9cZEe7fHCsKSAHaFS&pid=Api&P=0&h=180" },
  { name: "Bangkok, Thailand", image: "https://tse1.mm.bing.net/th?id=OIP.nrmggtOqWZfTRW-6e24gnAHaE7&pid=Api&P=0&h=180" },
  { name: "Istanbul, Turkey", image: "https://tse2.mm.bing.net/th?id=OIP.0nm1UUSemBMD5isGFnMr3QHaE8&pid=Api&P=0&h=180" },
  { name: "Barcelona, Spain", image: "https://tse2.mm.bing.net/th?id=OIP.vRsRv0XkNzlKazK-e1O8nAHaE7&pid=Api&P=0&h=180" },
  { name: "Moscow, Russia", image: "https://tse1.mm.bing.net/th?id=OIP.pVOpYTDKF3XriVgZ1N2oIQHaFG&pid=Api&P=0&h=180" },
  { name: "Rio de Janeiro, Brazil", image: "https://via.placeholder.com/300x200?text=Rio" },
  { name: "Los Angeles, USA", image: "https://via.placeholder.com/300x200?text=LA" },
  { name: "Singapore", image: "https://via.placeholder.com/300x200?text=Singapore" },
  { name: "Amsterdam, Netherlands", image: "https://via.placeholder.com/300x200?text=Amsterdam" },
  { name: "Hong Kong", image: "https://via.placeholder.com/300x200?text=Hong+Kong" },
  { name: "San Francisco, USA", image: "https://via.placeholder.com/300x200?text=SF" },
  { name: "Venice, Italy", image: "https://via.placeholder.com/300x200?text=Venice" },
  { name: "Prague, Czech Republic", image: "https://via.placeholder.com/300x200?text=Prague" },
  { name: "Berlin, Germany", image: "https://via.placeholder.com/300x200?text=Berlin" },
  { name: "Vienna, Austria", image: "https://via.placeholder.com/300x200?text=Vienna" },
  { name: "Lisbon, Portugal", image: "https://via.placeholder.com/300x200?text=Lisbon" },
  { name: "Mumbai, India", image: "https://via.placeholder.com/300x200?text=Mumbai" },
  { name: "Seoul, South Korea", image: "https://via.placeholder.com/300x200?text=Seoul" },
  { name: "Mexico City, Mexico", image: "https://via.placeholder.com/300x200?text=Mexico+City" },
  { name: "Athens, Greece", image: "https://via.placeholder.com/300x200?text=Athens" },
  { name: "Kuala Lumpur, Malaysia", image: "https://via.placeholder.com/300x200?text=KL" },
  { name: "Cairo, Egypt", image: "https://via.placeholder.com/300x200?text=Cairo" },
  { name: "Buenos Aires, Argentina", image: "https://via.placeholder.com/300x200?text=Buenos+Aires" },
  { name: "Beijing, China", image: "https://via.placeholder.com/300x200?text=Beijing" },
  { name: "Hanoi, Vietnam", image: "https://via.placeholder.com/300x200?text=Hanoi" },
  { name: "Johannesburg, South Africa", image: "https://via.placeholder.com/300x200?text=Joburg" },
  { name: "Edinburgh, Scotland", image: "https://via.placeholder.com/300x200?text=Edinburgh" },
  { name: "Oslo, Norway", image: "https://via.placeholder.com/300x200?text=Oslo" },
  { name: "Stockholm, Sweden", image: "https://via.placeholder.com/300x200?text=Stockholm" },
  { name: "Zurich, Switzerland", image: "https://via.placeholder.com/300x200?text=Zurich" },
  { name: "Lima, Peru", image: "https://via.placeholder.com/300x200?text=Lima" },
  { name: "Toronto, Canada", image: "https://via.placeholder.com/300x200?text=Toronto" },
  { name: "Vancouver, Canada", image: "https://via.placeholder.com/300x200?text=Vancouver" },
];

const BookingPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [formData, setFormData] = useState({
    numPersons: 1,
    persons: [{ name: "", age: "" }],
    additionalDetails: "",
  });
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({ search: "", priceRange: "", rating: "" });

  const handleOpenDialog = (place) => {
    setSelectedPlace(place);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      numPersons: 1,
      persons: [{ name: "", age: "" }],
      additionalDetails: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "numPersons") {
      const num = parseInt(value, 10) || 1;
      const updatedPersons = Array.from({ length: num }, (_, i) => ({
        name: formData.persons[i]?.name || "",
        age: formData.persons[i]?.age || "",
      }));
      setFormData({ ...formData, numPersons: num, persons: updatedPersons });
    } else {
      const [field, index] = name.split("-");
      const updatedPersons = [...formData.persons];
      updatedPersons[parseInt(index, 10)][field] = value;
      setFormData({ ...formData, persons: updatedPersons });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://api.phonepe.com/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_KEY", // Replace with your API key
        },
        body: JSON.stringify({
          merchantId: "YOUR_MERCHANT_ID", // Replace with your Merchant ID
          recipient: "rushikamaddula@ibl", // Recipient's account
          amount: 5000, // Amount in smallest currency unit (e.g., 5000 paise = 50 INR)
          transactionRef: `TXN_${Date.now()}`, // Unique transaction reference
          description: `Payment for booking ${selectedPlace.name}`,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Payment initiated successfully! Please complete the payment on PhonePe.");
        // Optionally, redirect to PhonePe's payment page
        window.location.href = result.paymentUrl;
      } else {
        alert(`Payment failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred while initiating the payment.");
    }
  };
  

  const toggleFavorite = (place) => {
    setFavorites((prev) =>
      prev.includes(place)
        ? prev.filter((fav) => fav !== place)
        : [...prev, place]
    );
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const filteredPlaces = destinations.filter((place) =>
    place.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
        >
          Explore Our Destinations
        </Typography>

        {/* Search Filter */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <TextField
            label="Search Destinations"
            variant="outlined"
            size="small"
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </div>

        <Grid container spacing={3}>
          {filteredPlaces.map((place, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={place.image}
                  alt={place.name}
                  style={{ borderRadius: "4px 4px 0 0" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ marginTop: "10px", fontWeight: "bold", color: "#333" }}
                  >
                    {place.name}
                  </Typography>
                  <Rating value={place.rating} precision={0.1} readOnly />
                  <Typography variant="body1" style={{ margin: "10px 0", color: "#555" }}>
                    {place.price}
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "10px", width: "70%" }}
                      onClick={() => handleOpenDialog(place)}
                    >
                      Book Now
                    </Button>
                    <IconButton
                      color={favorites.includes(place) ? "secondary" : "default"}
                      onClick={() => toggleFavorite(place)}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Booking Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Book Your Trip to {selectedPlace?.name}</DialogTitle>
          <DialogContent>
            <TextField
              label="Number of Persons"
              name="numPersons"
              type="number"
              fullWidth
              margin="normal"
              value={formData.numPersons}
              onChange={handleInputChange}
              required
            />
            {formData.persons.map((person, index) => (
              <div key={index}>
                <TextField
                  label={`Name of Person ${index + 1}`}
                  name={`name-${index}`}
                  fullWidth
                  margin="normal"
                  value={person.name}
                  onChange={handleInputChange}
                  required
                />
                <TextField
                  label={`Age of Person ${index + 1}`}
                  name={`age-${index}`}
                  type="number"
                  fullWidth
                  margin="normal"
                  value={person.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}
            <TextField
              label="Additional Details (Optional)"
              name="additionalDetails"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              value={formData.additionalDetails}
              onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Confirm Booking
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default BookingPage;
