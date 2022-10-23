import {
  Box,
  ButtonBase,
  Card,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const FeatureSection = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ marginLeft: 20 }}>
          <Grid
            item
            sx={12}
            style={{ borderLeft: "3px solid #ECB365", paddingLeft: 10 }}
          >
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Featured
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, margin: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxHeight: 300,
                  height: 200,
                  maxWidth: 300,
                  flexGrow: 1,
                  cursor: "pointer",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm container>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Standard license
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FeatureSection;
