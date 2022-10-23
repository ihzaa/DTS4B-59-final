import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: 70,
          color: "#ECB365",
          background: "#041C32",
        }}
      >
        <Typography variant="h6" sx={{ padding: 5 }}>
          created by pair DTS 59 Final
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
