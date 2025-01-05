import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <form>
            {!isLogin && (
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            )}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            {!isLogin && (
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: "20px",
                backgroundColor: "#4DA1A9",
                "&:hover": { backgroundColor: "#79D7BE" },
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <Button color="primary" onClick={toggleForm}>
                {isLogin ? "Sign Up" : "Login"}
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginSignup;
