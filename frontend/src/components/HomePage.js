import React from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Card,
  Container,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const HomePage = () => {
  const images = [
    "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const reviews = [
    {
      text: "Amazing website! Highly recommend for travel planning.",
      name: "John Doe",
      pic: "https://via.placeholder.com/100",
    },
    {
      text: "User-friendly and full of great destinations.",
      name: "Jane Smith",
      pic: "https://via.placeholder.com/100",
    },
    {
      text: "Helped me plan the best vacation ever!",
      name: "Sam Wilson",
      pic: "https://via.placeholder.com/100",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#FFFFFF",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Explore the World with Us
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: 600, mb: 4 }}>
          Discover your next adventure, plan your trip, and make unforgettable
          memories.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#4DA1A9", color: "#FFFFFF" }}
        >
          Get Started
        </Button>
      </Box>

      {/* Image Gallery Slider */}
      <Box
        sx={{
          backgroundColor: "#F6F4F0",
          color: "#4DA1A9",
          py: 4,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Image Gallery
        </Typography>
        <Carousel
          autoPlay
          animation="slide"
          indicators={true}
          navButtonsAlwaysVisible={true}
          sx={{
            maxWidth: "80%",
            margin: "auto",
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 400,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 4,
              }}
            ></Box>
          ))}
        </Carousel>
      </Box>

      {/* Reviews Section */}
      <Box sx={{ backgroundColor: "#F6F4F0", py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#4DA1A9" }}
        >
          What People Say
        </Typography>
        <Carousel
          indicators={false}
          autoPlay
          interval={3000}
          animation="slide"
          sx={{ width: "80%", margin: "auto" }}
        >
          {reviews.map((review, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 3,
                margin: "auto",
                maxWidth: 600,
                boxShadow: 3,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Avatar
                src={review.pic}
                sx={{ width: 80, height: 80, marginRight: 3 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#4DA1A9" }}
                >
                  {review.name}
                </Typography>
                <Typography>{review.text}</Typography>
              </Box>
            </Card>
          ))}
        </Carousel>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          backgroundColor: "#4DA1A9",
          color: "#FFFFFF",
          py: 6,
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          About Us
        </Typography>
        <Typography
          align="center"
          sx={{ maxWidth: 800, margin: "auto", lineHeight: 1.8 }}
        >
          We are passionate about helping you explore the world and make your
          travel dreams a reality. Whether you're seeking thrilling adventures
          or serene relaxation, we provide everything you need to create a
          personalized travel experience. Let us be your trusted companion on
          your next journey.
        </Typography>
      </Box>

      {/* Contact Us Section */}
      <Box
        sx={{
          backgroundColor: "#F6F4F0",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#4DA1A9" }}
        >
          Contact Us
        </Typography>
        <Typography>Email: support@travelwebsite.com</Typography>
        <Typography>Phone: +123-456-7890</Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#4DA1A9",
            color: "#FFFFFF",
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
