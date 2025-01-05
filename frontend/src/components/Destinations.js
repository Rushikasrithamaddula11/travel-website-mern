import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const destinations = [
  {
    name: "Paris, France",
    image: "https://tse1.mm.bing.net/th?id=OIP.E3PPsxjqt3N4DOy51yERUgHaE7&pid=Api&P=0&h=180",
    description: "The City of Light awaits you with its iconic Eiffel Tower and charming streets.",
  },
  {
    name: "Kyoto, Japan",
    image: "https://tse4.mm.bing.net/th?id=OIP.Avn3nCZpiI--M-Ul06Yn9gHaE8&pid=Api&P=0&h=180",
    description: "Experience the serene temples and beautiful cherry blossoms of Kyoto.",
  },
  {
    name: "Cape Town, South Africa",
    image: "https://tse2.mm.bing.net/th?id=OIP.6JyAcbUrITnMON-3AjZJoQHaEo&pid=Api&P=0&h=180",
    description: "Discover stunning landscapes and vibrant culture in Cape Town.",
  },
  {
    name: "Sydney, Australia",
    image: "https://tse1.mm.bing.net/th?id=OIP.SSlQmNy6Hp3dRwd3b15ASAHaE7&pid=Api&P=0&h=180",
    description: "Explore the iconic Sydney Opera House and beautiful beaches.",
  },
  {
    name: "New York, USA",
    image: "https://tse3.mm.bing.net/th?id=OIP.XdsE3WJwBpiuOr2TsRP8IAHaEs&pid=Api&P=0&h=180",
    description: "The Big Apple offers endless attractions, from Times Square to Central Park.",
  },
  {
    name: "Rome, Italy",
    image: "https://tse1.mm.bing.net/th?id=OIP.INB7nsN_TGttYNu4sINevQHaEW&pid=Api&P=0&h=180",
    description: "Walk through history in Rome, home to the Colosseum and Vatican City.",
  },
];

const Destinations = () => {
  return (
    <Grid container spacing={3} padding={3}>
      {destinations.map((destination, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={destination.image}
              alt={destination.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {destination.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {destination.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginTop: 2,
                  backgroundColor: "#4DA1A9",
                  "&:hover": {
                    backgroundColor: "#79D7BE",
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Destinations;
