import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#5a595a",
        color: "white",
        textAlign: "center",
        py: 3,
        mt: 4,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Follow Us
      </Typography>
      <Box>
        <IconButton
          href="https://www.instagram.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.facebook.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://www.youtube.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <YouTube />
        </IconButton>
        <IconButton
          href="https://www.twitter.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <Twitter />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        &copy; {new Date().getFullYear()} Travel Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
