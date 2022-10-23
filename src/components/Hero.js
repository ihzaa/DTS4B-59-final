import { CenterFocusStrong, ViewCarousel } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";

const Hero = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", background: "#04293A", minHeight: 600 }}>
        <Container>
          <Grid container spacing={2} sx={{ marginTop: 30 }}>
            <Grid item xs={12}>
              <Typography variant="h3">
                Unlimited movies, TV shows, and more.
              </Typography>
              <Typography variant="h6">
                Watch anywhere. Cancel anytime.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
