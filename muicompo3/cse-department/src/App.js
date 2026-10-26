import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Checkbox,
  FormControlLabel,
  Slider,
  Switch,
  Avatar,
  Badge,
  CircularProgress,
  Drawer,
  Tabs,
  Tab,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Autocomplete,
  Breadcrumbs,
  ButtonGroup,
  Chip,
  Divider,
  Fab,
  LinearProgress,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Rating,
  Skeleton,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Container,
  Box,
  Grid,
  IconButton
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import ComputerIcon from "@mui/icons-material/Computer";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import "./App.css";

function App() {

  /* ================= STATES ================= */

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [tabValue, setTabValue] = React.useState(0);

  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const [popoverAnchor, setPopoverAnchor] = React.useState(null);

  const [rating, setRating] = React.useState(4);

  /* ================= DATA ================= */

  const researchAreas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "Robotics",
    "Computer Networks"
  ];

  const speedDialActions = [
    {
      icon: <EditIcon />,
      name: "Apply"
    },
    {
      icon: <ShareIcon />,
      name: "Share"
    },
    {
      icon: <PhoneIcon />,
      name: "Contact"
    }
  ];

  /* ================= RETURN ================= */

  return (
    <div>

      {/* =====================================================
          1. APP BAR
      ====================================================== */}

      <AppBar position="sticky">

        <Toolbar>

          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1, ml: 2 }}
          >
            CSE Department
          </Typography>

          <Button color="inherit">
            Login
          </Button>

        </Toolbar>

      </AppBar>


      {/* =====================================================
          2. DRAWER
      ====================================================== */}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >

        <Box className="drawer">

          <Typography
            variant="h5"
            className="drawer-title"
          >
            CSE Department
          </Typography>

          <Divider />

          <Button
            className="drawer-button"
            onClick={() => setDrawerOpen(false)}
          >
            🏠 Home
          </Button>

          <Button className="drawer-button">
            🎓 Academics
          </Button>

          <Button className="drawer-button">
            👨‍🏫 Faculty
          </Button>

          <Button className="drawer-button">
            🔬 Research
          </Button>

          <Button className="drawer-button">
            💼 Placements
          </Button>

          <Button className="drawer-button">
            🏢 Facilities
          </Button>

          <Button className="drawer-button">
            📰 News & Events
          </Button>

          <Button className="drawer-button">
            🏆 Achievements
          </Button>

          <Button className="drawer-button">
            📞 Contact
          </Button>

          <Divider />

          <Typography
            variant="subtitle1"
            sx={{ p: 2 }}
          >
            Quick Links
          </Typography>

          <Button className="drawer-button">
            Student Portal
          </Button>

          <Button className="drawer-button">
            Faculty Portal
          </Button>

          <Button className="drawer-button">
            Academic Calendar
          </Button>

        </Box>

      </Drawer>


      {/* =====================================================
          3. HERO SECTION
      ====================================================== */}

      <section className="hero">

        <div className="hero-content">

          <Chip
            label="Department of Computer Science & Engineering"
            color="secondary"
          />

          <Typography
            variant="h1"
            className="hero-title"
          >
            Engineering the Future with Technology
          </Typography>

          <Typography
            variant="h6"
            className="hero-text"
          >
            Excellence in Education, Research, Innovation
            and Industry Collaboration.
          </Typography>

          <Box sx={{ mt: 4 }}>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 2 }}
            >
              Explore Department
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
            >
              Admissions
            </Button>

          </Box>

        </div>

      </section>

          


      {/* =====================================================
          4. PLACED STUDENTS MOVING WINDOW
      ====================================================== */}

      <Box className="placement-ticker">

        <Box className="ticker-title">
          🎓 PLACED STUDENTS
        </Box>

        <Box className="ticker-wrapper">

          <Box className="ticker-content">

            <span>
              👩‍💻 Shreya Patil — TCS — 8 LPA
            </span>

            <span>
              👨‍💻 Rahul Sharma — Infosys — 7 LPA
            </span>

            <span>
              👩‍💻 Priya Joshi — Accenture — 9 LPA
            </span>

            <span>
              👨‍💻 Amit Kulkarni — Capgemini — 6.5 LPA
            </span>

            <span>
              👩‍💻 Sneha Deshmukh — Wipro — 8 LPA
            </span>

            <span>
              👨‍💻 Aditya More — Cognizant — 7.5 LPA
            </span>

            <span>
              👩‍💻 Neha Patil — Deloitte — 10 LPA
            </span>

            <span>
              👨‍💻 Akshay Jadhav — Accenture — 9.5 LPA
            </span>


            {/* DUPLICATE CONTENT
                This makes the scrolling continuous */}

            <span>
              👩‍💻 Shreya Patil — TCS — 8 LPA
            </span>

            <span>
              👨‍💻 Rahul Sharma — Infosys — 7 LPA
            </span>

            <span>
              👩‍💻 Priya Joshi — Accenture — 9 LPA
            </span>

            <span>
              👨‍💻 Amit Kulkarni — Capgemini — 6.5 LPA
            </span>

            <span>
              👩‍💻 Sneha Deshmukh — Wipro — 8 LPA
            </span>

            <span>
              👨‍💻 Aditya More — Cognizant — 7.5 LPA
            </span>

            <span>
              👩‍💻 Neha Patil — Deloitte — 10 LPA
            </span>

            <span>
              👨‍💻 Akshay Jadhav — Accenture — 9.5 LPA
            </span>

          </Box>

        </Box>

      </Box>


      {/* =====================================================
          5. IMPORTANT ALERT
      ====================================================== */}


      {/* =====================================================
          4. IMPORTANT ALERT
      ====================================================== */}

      <Container sx={{ mt: 4 }}>

        <Alert
          severity="info"
          action={
            <Button color="inherit">
              View
            </Button>
          }
        >
          Admissions for Academic Year 2026-27 are now open!
        </Alert>

      </Container>


      {/* =====================================================
          5. BREADCRUMBS
      ====================================================== */}

      <Container sx={{ mt: 3 }}>

        <Breadcrumbs>

          <Typography color="inherit">
            Home
          </Typography>

          <Typography color="inherit">
            Department
          </Typography>

          <Typography color="text.primary">
            CSE
          </Typography>

        </Breadcrumbs>

      </Container>


      {/* =====================================================
          6. ABOUT SECTION
      ====================================================== */}

      <section className="section">

        <Container>

          <Typography
            variant="overline"
            color="primary"
          >
            ABOUT US
          </Typography>

          <Typography
            variant="h3"
            className="section-title"
          >
            Department of CSE
          </Typography>

          <Grid container spacing={4}>

            <Grid item xs={12} md={7}>

              <Typography
                variant="body1"
                className="paragraph"
              >
                The Department of Computer Science and Engineering
                is committed to providing high-quality education,
                promoting research and developing technically
                skilled professionals.
              </Typography>

              <Typography
                variant="body1"
                className="paragraph"
              >
                Our students gain knowledge in programming,
                artificial intelligence, machine learning,
                data science, cybersecurity, cloud computing
                and modern software technologies.
              </Typography>

              <Box sx={{ mt: 3 }}>

                <Chip
                  label="Innovation"
                  color="primary"
                  sx={{ mr: 1 }}
                />

                <Chip
                  label="Research"
                  color="success"
                  sx={{ mr: 1 }}
                />

                <Chip
                  label="Technology"
                  color="warning"
                />

              </Box>

            </Grid>


            <Grid item xs={12} md={5}>

              <Card>

                <CardContent>

                  <Typography variant="h5">
                    Vision
                  </Typography>

                  <Typography className="paragraph">
                    To become a center of excellence in Computer
                    Science education, research and innovation.
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="h5">
                    Mission
                  </Typography>

                  <Typography className="paragraph">
                    To develop competent, innovative and
                    socially responsible technology professionals.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          </Grid>

        </Container>

      </section>


      {/* =====================================================
          7. ACADEMICS - TABS
      ====================================================== */}

      <section className="section light-section">

        <Container>

          <Typography
            variant="overline"
            color="primary"
          >
            ACADEMICS
          </Typography>

          <Typography
            variant="h3"
            className="section-title"
          >
            Programs Offered
          </Typography>


          <Tabs
            value={tabValue}
            onChange={(event, newValue) =>
              setTabValue(newValue)
            }
            centered
          >

            <Tab label="B.Tech / B.E." />

            <Tab label="M.Tech" />

            <Tab label="Ph.D." />

          </Tabs>


          <Box sx={{ mt: 4 }}>

            {tabValue === 0 && (

              <Card>

                <CardContent>

                  <SchoolIcon
                    color="primary"
                    fontSize="large"
                  />

                  <Typography variant="h5">
                    B.Tech / B.E. Computer Science
                  </Typography>

                  <Typography className="paragraph">
                    A four-year undergraduate program covering
                    programming, data structures, algorithms,
                    databases, operating systems, networks,
                    artificial intelligence and software engineering.
                  </Typography>

                  <Chip
                    label="4 Years"
                    color="primary"
                  />

                </CardContent>

              </Card>

            )}


            {tabValue === 1 && (

              <Card>

                <CardContent>

                  <ComputerIcon
                    color="primary"
                    fontSize="large"
                  />

                  <Typography variant="h5">
                    M.Tech Computer Science
                  </Typography>

                  <Typography className="paragraph">
                    Advanced study in computer science with
                    opportunities for specialization and research.
                  </Typography>

                  <Chip
                    label="Postgraduate"
                    color="success"
                  />

                </CardContent>

              </Card>

            )}


            {tabValue === 2 && (

              <Card>

                <CardContent>

                  <ScienceIcon
                    color="primary"
                    fontSize="large"
                  />

                  <Typography variant="h5">
                    Ph.D. Computer Science
                  </Typography>

                  <Typography className="paragraph">
                    Research-focused doctoral program for students
                    interested in advanced computing research.
                  </Typography>

                  <Chip
                    label="Research"
                    color="warning"
                  />

                </CardContent>

              </Card>

            )}

          </Box>

        </Container>

      </section>


      {/* =====================================================
          8. FACULTY - AVATAR + BADGE + RATING
      ====================================================== */}

      <section className="section">

        <Container>

          <Typography
            variant="overline"
            color="primary"
          >
            OUR PEOPLE
          </Typography>

          <Typography
            variant="h3"
            className="section-title"
          >
            Faculty Members
          </Typography>


          <Grid container spacing={3}>


            {/* FACULTY 1 */}

            <Grid item xs={12} md={3}>

              <Card className="faculty-card">

                <Badge
                  badgeContent="HOD"
                  color="secondary"
                >

                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      fontSize: 35
                    }}
                  >
                    RK
                  </Avatar>

                </Badge>

                <Typography variant="h6">
                  Miss.Radhikaa Dhanal
                </Typography>

                <Typography color="primary">
                  Head of Department
                </Typography>

                <Chip
                  label="CSEL"
                  size="small"
                  sx={{ mt: 1 }}
                />

                <Box>

                  <Rating
                    value={rating}
                    onChange={(event, value) =>
                      setRating(value)
                    }
                  />

                </Box>

                <Tooltip title="View Faculty Profile">

                  <Button variant="outlined">
                    View Profile
                  </Button>

                </Tooltip>

              </Card>

            </Grid>


            {/* FACULTY 2 */}

            <Grid item xs={12} md={3}>

              <Card className="faculty-card">

                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    fontSize: 35
                  }}
                >
                  PS
                </Avatar>

                <Typography variant="h6">
                  Miss.Shobha Patil
                </Typography>

                <Typography color="primary">
                  Professor
                </Typography>

                <Chip
                  label="SDB"
                  size="small"
                  sx={{ mt: 1 }}
                />

                <Box>
                  <Rating value={5} readOnly />
                </Box>

                <Tooltip title="View Faculty Profile">

                  <Button variant="outlined">
                    View Profile
                  </Button>

                </Tooltip>

              </Card>

            </Grid>


            {/* FACULTY 3 */}

            <Grid item xs={12} md={3}>

              <Card className="faculty-card">

                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    fontSize: 35
                  }}
                >
                  AP
                </Avatar>

                <Typography variant="h6">
                  Mr.K.T.Mane
                </Typography>

                <Typography color="primary">
                  Associate Professor
                </Typography>

                <Chip
                  label="Python"
                  size="small"
                  sx={{ mt: 1 }}
                />

                <Box>
                  <Rating value={4} readOnly />
                </Box>

                <Tooltip title="View Faculty Profile">

                  <Button variant="outlined">
                    View Profile
                  </Button>

                </Tooltip>

              </Card>

            </Grid>


            {/* FACULTY 4 */}

            <Grid item xs={12} md={3}>

              <Card className="faculty-card">

                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    fontSize: 35
                  }}
                >
                  SJ
                </Avatar>

                <Typography variant="h6">
                  Miss.Sonali Shinge
                </Typography>

                <Typography color="primary">
                  Assistant Professor
                </Typography>

                <Chip
                  label="Data base
                  "
                  size="small"
                  sx={{ mt: 1 }}
                />

                <Box>
                  <Rating value={5} readOnly />
                </Box>

                <Tooltip title="View Faculty Profile">

                  <Button variant="outlined">
                    View Profile
                  </Button>

                </Tooltip>

              </Card>

            </Grid>

          </Grid>

        </Container>

      </section>


      {/* =====================================================
          9. RESEARCH
      ====================================================== */}

      <section className="section light-section">

        <Container>

          <Typography
            variant="overline"
            color="primary"
          >
            RESEARCH
          </Typography>

          <Typography
            variant="h3"
            className="section-title"
          >
            Research & Innovation
          </Typography>


          {/* AUTOCOMPLETE */}

          <Autocomplete
            options={researchAreas}
            sx={{
              maxWidth: 600,
              margin: "0 auto 35px"
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Research Area"
              />
            )}
          />


          <Grid container spacing={3}>

            {researchAreas.slice(0, 6).map((area, index) => (

              <Grid item xs={12} md={4} key={index}>

                <Card>

                  <CardContent>

                    <ScienceIcon
                      color="primary"
                      fontSize="large"
                    />

                    <Typography variant="h6">
                      {area}
                    </Typography>

                    <Typography color="text.secondary">
                      Research and development in {area}.
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </section>


      {/* =====================================================
          10. PLACEMENTS
      ====================================================== */}

      <section className="placement-section">

        <Container>

          <Typography
            variant="overline"
            color="secondary"
          >
            CAREER
          </Typography>

          <Typography
            variant="h3"
            className="placement-title"
          >
            Placements & Career
          </Typography>


          <Grid
            container
            spacing={5}
            alignItems="center"
          >


            {/* PLACEMENT IMAGE */}

            <Grid item xs={12} md={6}>

              <Card>

                <CardMedia
                  component="img"
                  height="330"
                  image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
                  alt="Students during placement activity"
                />

                <CardContent>

                  <Typography variant="h5">
                    Industry Opportunities
                  </Typography>

                  <Typography>
                    Our students interact with leading companies
                    through placements, internships and industry
                    programs.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>


            {/* PLACEMENT DETAILS */}

            <Grid item xs={12} md={6}>

              <Typography variant="h5">
                Placement Rate
              </Typography>

              <Typography
                variant="h3"
                color="secondary"
              >
                92%
              </Typography>

              <LinearProgress
                variant="determinate"
                value={92}
                sx={{ height: 10, borderRadius: 5, mb: 4 }}
              />


              <Grid container spacing={2}>

                <Grid item xs={4}>

                  <Card>

                    <CardContent>

                      <Typography variant="h5">
                        50+
                      </Typography>

                      <Typography>
                        Recruiters
                      </Typography>

                    </CardContent>

                  </Card>

                </Grid>


                <Grid item xs={4}>

                  <Card>

                    <CardContent>

                      <Typography variant="h5">
                        15 LPA
                      </Typography>

                      <Typography>
                        Highest Package
                      </Typography>

                    </CardContent>

                  </Card>

                </Grid>


                <Grid item xs={4}>

                  <Card>

                    <CardContent>

                      <Typography variant="h5">
                        8 LPA
                      </Typography>

                      <Typography>
                        Average Package
                      </Typography>

                    </CardContent>

                  </Card>

                </Grid>

              </Grid>


              {/* SLIDER */}

              <Typography sx={{ mt: 4 }}>
                Placement Satisfaction
              </Typography>

              <Slider
                defaultValue={90}
                valueLabelDisplay="auto"
              />


              {/* CIRCULAR PROGRESS */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: 2
                }}
              >

                <CircularProgress
                  variant="determinate"
                  value={92}
                />

                <Typography>
                  Placement progress
                </Typography>

              </Box>

            </Grid>

          </Grid>

        </Container>

      </section>


      {/* =====================================================
          11. FACILITIES
      ====================================================== */}

      <section className="section">

        <Container>

          <Typography
            variant="overline"
            color="primary"
          >
            INFRASTRUCTURE
          </Typography>

          <Typography
            variant="h3"
            className="section-title"
          >
            Department Facilities
          </Typography>


          <Grid container spacing={3}>

            <Grid item xs={12} md={3}>

              <Card>

                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80"
                />

                <CardContent>

                  <ComputerIcon color="primary" />

                  <Typography variant="h6">
                    Computer Labs
                  </Typography>

                  <Typography>
                    Modern computer laboratories for practical
                    learning and development.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>


            <Grid item xs={12} md={3}>

              <Card>

                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80"
                />

                <CardContent>

                  <ComputerIcon color="primary" />

                  <Typography variant="h6">
                    Robotics Lab
                  </Typography>

                  <Typography>
                    Facilities for robotics, automation and
                    intelligent systems.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>


            <Grid item xs={12} md={3}>

              <Card>

                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80"
                />

                <CardContent>

                  <SchoolIcon color="primary" />

                  <Typography variant="h6">
                    Department Library
                  </Typography>

                  <Typography>
                    Books, journals and digital resources for
                    students and researchers.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>


            <Grid item xs={12} md={3}>

              <Card>

                <CardMedia
                  component="img"
                  height="180"
                  image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80"
                />

                <CardContent>

                  <ComputerIcon color="primary" />

                  <Typography variant="h6">
                    Research Center
                  </Typography>

                  <Typography>
                    Dedicated infrastructure for research and
                    innovation.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          </Grid>

        </Container>

      </section>


      {/* =====================================================
          12. NEWS & EVENTS
      ====================================================== */}

      <section className="section light-section">

        <Container>

          <Typography
            variant="overline"
            color="primary"
          >
            LATEST UPDATES
          </Typography>

          <Typography
            variant="h3"
            className="section-title"
          >
            News & Events
          </Typography>


          <Grid container spacing={3}>


            <Grid item xs={12} md={4}>

              <Card>

                <CardContent>

                  <Chip
                    label="Workshop"
                    color="primary"
                  />

                  <Typography variant="h6" sx={{ mt: 2 }}>
                    AI & Machine Learning Workshop
                  </Typography>

                  <Typography>
                    Hands-on workshop on modern AI and ML
                    technologies.
                  </Typography>

                  <Button sx={{ mt: 2 }}>
                    Read More
                  </Button>

                </CardContent>

              </Card>

            </Grid>


            <Grid item xs={12} md={4}>

              <Card>

                <CardContent>

                  <Chip
                    label="Research"
                    color="success"
                  />

                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Research Paper Published
                  </Typography>

                  <Typography>
                    Faculty members publish research in
                    international journals.
                  </Typography>

                  <Button sx={{ mt: 2 }}>
                    Read More
                  </Button>

                </CardContent>

              </Card>

            </Grid>


            <Grid item xs={12} md={4}>

              <Card>

                <CardContent>

                  <Chip
                    label="Event"
                    color="warning"
                  />

                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Annual Project Exhibition
                  </Typography>

                  <Typography>
                    Students present innovative technical
                    projects and prototypes.
                  </Typography>

                  <Button sx={{ mt: 2 }}>
                    Read More
                  </Button>

                </CardContent>

              </Card>

            </Grid>

          </Grid>


          {/* SKELETON */}

          <Box sx={{ mt: 5 }}>

            <Typography variant="h6">
              More Updates Loading...
            </Typography>

            <Skeleton variant="text" width="60%" />

            <Skeleton
              variant="rectangular"
              height={70}
            />

          </Box>


          {/* PAGINATION */}

          <Box className="pagination">

            <Pagination
              count={5}
              color="primary"
            />

          </Box>

        </Container>

      </section>


      {/* =====================================================
          13. FAQ - ACCORDION
      ====================================================== */}

      <section className="section">

        <Container>

          <Typography
            variant="h3"
            className="section-title"
          >
            Frequently Asked Questions
          </Typography>


          <Accordion>

            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >

              <Typography>
                What programs are offered by the CSE department?
              </Typography>

            </AccordionSummary>

            <AccordionDetails>

              The department offers undergraduate,
              postgraduate and doctoral programs.

            </AccordionDetails>

          </Accordion>


          <Accordion>

            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >

              <Typography>
                What are the major research areas?
              </Typography>

            </AccordionSummary>

            <AccordionDetails>

              Major areas include Artificial Intelligence,
              Machine Learning, Data Science, Cyber Security,
              Robotics and Cloud Computing.

            </AccordionDetails>

          </Accordion>


          <Accordion>

            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >

              <Typography>
                Does the department provide placement assistance?
              </Typography>

            </AccordionSummary>

            <AccordionDetails>

              Yes. The department provides placement assistance,
              internships, career guidance and industry interaction.

            </AccordionDetails>

          </Accordion>

        </Container>

      </section>


      {/* =====================================================
          14. MENU + POPOVER
      ====================================================== */}

      <section className="section light-section">

        <Container>

          <Typography
            variant="h4"
            className="section-title"
          >
            Quick Actions
          </Typography>


          <Button
            variant="contained"
            onClick={(event) =>
              setMenuAnchor(event.currentTarget)
            }
          >
            Quick Links Menu
          </Button>


          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
          >

            <MenuItem>Admission Portal</MenuItem>

            <MenuItem>Student Portal</MenuItem>

            <MenuItem>Faculty Portal</MenuItem>

            <MenuItem>Academic Calendar</MenuItem>

          </Menu>


          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={(event) =>
              setPopoverAnchor(event.currentTarget)
            }
          >
            Department Information
          </Button>


          <Popover
            open={Boolean(popoverAnchor)}
            anchorEl={popoverAnchor}
            onClose={() => setPopoverAnchor(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >

            <Box sx={{ p: 3 }}>

              <Typography variant="h6">
                CSE Department
              </Typography>

              <Typography>
                Email: cse@college.edu
              </Typography>

              <Typography>
                Phone: +91 98765 43210
              </Typography>

            </Box>

          </Popover>

        </Container>

      </section>


      {/* =====================================================
          15. ADMISSION FORM
      ====================================================== */}

      <section className="section">

        <Container>

          <Typography
            variant="overline"
            color="primary"
          >
            CONTACT
          </Typography>

          <Typography
            variant="h3"
            className="section-title"
          >
            Student Enquiry
          </Typography>


          <Box className="form-container">

            <TextField
              label="Full Name"
              fullWidth
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
            />

            <TextField
              label="Phone Number"
              fullWidth
            />


            <Autocomplete
              options={researchAreas}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Interested Area"
                />
              )}
            />


            <FormControlLabel
              control={<Checkbox />}
              label="I agree to the department guidelines"
            />


            <FormControlLabel
              control={<Switch />}
              label="Receive department notifications"
            />


            <ButtonGroup
              variant="contained"
              fullWidth
            >

              <Button>
                Submit Enquiry
              </Button>

              <Button>
                Clear
              </Button>

            </ButtonGroup>

          </Box>

        </Container>

      </section>


      {/* =====================================================
          16. FOOTER
      ====================================================== */}

      <footer className="footer">

        <Container>

          <Grid container spacing={4}>

            <Grid item xs={12} md={4}>

              <Typography variant="h5">
                CSE Department
              </Typography>

              <Typography>
                Department of Computer Science &
                Engineering
              </Typography>

            </Grid>


            <Grid item xs={12} md={4}>

              <Typography variant="h6">
                Contact
              </Typography>

              <Typography>
                📍 College Campus, Maharashtra, India
              </Typography>

              <Typography>
                📞 +91 98765 43210
              </Typography>

              <Typography>
                ✉ cse@college.edu
              </Typography>

            </Grid>


            <Grid item xs={12} md={4}>

              <Typography variant="h6">
                Quick Links
              </Typography>

              <Button color="inherit">
                Academics
              </Button>

              <Button color="inherit">
                Research
              </Button>

              <Button color="inherit">
                Placements
              </Button>

            </Grid>

          </Grid>

        </Container>

      </footer>


      {/* =====================================================
          17. FAB
      ====================================================== */}

      <Tooltip title="Add New Enquiry">

        <Fab
          color="primary"
          className="fab"
        >

          <AddIcon />

        </Fab>

      </Tooltip>


      {/* =====================================================
          18. SPEED DIAL
      ====================================================== */}

      <SpeedDial
        ariaLabel="Quick Actions"
        className="speed-dial"
        icon={<SpeedDialIcon />}
      >

        {speedDialActions.map((action) => (

          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />

        ))}

      </SpeedDial>


      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <Box className="copyright">

        <Typography variant="body2">
          © 2026 Department of Computer Science &
          Engineering. All Rights Reserved.
        </Typography>

      </Box>

    </div>
  );
}

export default App;