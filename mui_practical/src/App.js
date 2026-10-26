import React from "react";

import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Container,
} from "@mui/material";

function App() {
  return (
    <>
      {/* ============================= */}
      {/* 1. APP BAR */}
      {/* ============================= */}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My MUI Application
          </Typography>
        </Toolbar>
      </AppBar>


      {/* ============================= */}
      {/* 2. CARD */}
      {/* ============================= */}

      <Card sx={{ margin: 3 }}>

        <CardContent>

          <Typography variant="h5">
            CSE STUDENT
          </Typography>

          <Typography variant="body2">
            Study hard and achieve your goals!
          </Typography>

        </CardContent>

      </Card>


      {/* ============================= */}
      {/* 3. CONTAINER */}
      {/* ============================= */}

      <Container>


        {/* ============================= */}
        {/* 4. TYPOGRAPHY */}
        {/* ============================= */}

        <Typography
          variant="h2"
          sx={{ marginTop: 4 }}
        >
          Welcome to MUI
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: 2 }}
        >
          Hello this is Shreeya
        </Typography>


        {/* ============================= */}
        {/* 5. TEXT FIELD */}
        {/* ============================= */}

        <TextField
          label="Enter your Name"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 3 }}
        />


        {/* ============================= */}
        {/* 6. CHECKBOX */}
        {/* ============================= */}

        <FormControlLabel
          control={<Checkbox />}
          label="Accept Terms and Conditions"
          sx={{ marginTop: 2 }}
        />
       

        {/* ============================= */}
        {/* 7. BUTTON */}
        {/* ============================= */}

        <br />

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>


        {/* ============================= */}
        {/* 8. SECONDARY BUTTON */}
        {/* ============================= */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            marginTop: 2,
            marginLeft: 2,
          }}
        >
          Cancel
        </Button>

      </Container>
    </>
  );
}

export default App;