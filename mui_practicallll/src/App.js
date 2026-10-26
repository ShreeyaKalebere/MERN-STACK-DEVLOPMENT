import React, { useState } from "react";

import {
  Container,
  Typography,
  Slider,
  Switch,
  Avatar,
  Badge,
  CircularProgress,
  Drawer,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";


function App() {

  // For Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // For Tabs
  const [tabValue, setTabValue] = useState(0);


  return (
    <Container>

      {/* ================================= */}
      {/* 1. SLIDER */}
      {/* ================================= */}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        1. Slider
      </Typography>

      <Slider
        defaultValue={50}
        aria-label="Slider"
        valueLabelDisplay="auto"
        sx={{ width: 300 }}
      />


      {/* ================================= */}
      {/* 2. SWITCH */}
      {/* ================================= */}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        2. Switch
      </Typography>

      <Switch defaultChecked />


      {/* ================================= */}
      {/* 3. AVATAR */}
      {/* ================================= */}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        3. Avatar
      </Typography>

      <Avatar>
        S
      </Avatar>


      {/* ================================= */}
      {/* 4. BADGE */}
      {/* ================================= */}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        4. Badge
      </Typography>

      <Badge
        badgeContent={4}
        color="primary"
      >
        <Avatar>
          S
        </Avatar>
      </Badge>


      {/* ================================= */}
      {/* 5. CIRCULAR PROGRESS */}
      {/* ================================= */}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        5. Circular Progress
      </Typography>

      <CircularProgress />


      {/* ================================= */}
      {/* 6. DRAWER */}
      {/* ================================= */}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        6. Drawer
      </Typography>

      <Button
        variant="contained"
        onClick={() => setOpenDrawer(true)}
      >
        Open Drawer
      </Button>


      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >

        <Box
          sx={{
            width: 250,
            padding: 3,
          }}
        >

          <Typography variant="h5">
            My Drawer
          </Typography>

          <Typography sx={{ marginTop: 2 }}>
            Home
          </Typography>

          <Typography sx={{ marginTop: 2 }}>
            About
          </Typography>

          <Typography sx={{ marginTop: 2 }}>
            Contact
          </Typography>

          <Button
            variant="contained"
            sx={{ marginTop: 3 }}
            onClick={() => setOpenDrawer(false)}
          >
            Close
          </Button>

        </Box>

      </Drawer>


      {/* ================================= */}
      {/* 7. TABS */}
      {/* ================================= */}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        7. Tabs
      </Typography>

      <Tabs
        value={tabValue}
        onChange={(event, newValue) => {
          setTabValue(newValue);
        }}
      >

        <Tab label="Home" />

        <Tab label="About" />

        <Tab label="Contact" />

      </Tabs>


      {/* TAB CONTENT */}

      {tabValue === 0 && (
        <Typography sx={{ marginTop: 2 }}>
          This is Home Tab.
        </Typography>
      )}

      {tabValue === 1 && (
        <Typography sx={{ marginTop: 2 }}>
          This is About Tab.
        </Typography>
      )}

      {tabValue === 2 && (
        <Typography sx={{ marginTop: 2 }}>
          This is Contact Tab.
        </Typography>
      )}

    </Container>
  );
}


export default App;