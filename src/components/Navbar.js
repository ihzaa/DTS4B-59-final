import { Button, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // const onLogout = () => {
  //   navigate("/login");
  // };

  const signIn = () => {
    navigate("/login");
  };

  const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          backgroundColor: "#041c32",
          opacity: [0.9, 0.8, 0.7],
          color: "#ECB365",
        }}
      >
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            sx={{ flex: 1 }}
          >
            Movie List
          </Typography>
          <Button
            variant="text"
            size="small"
            onClick={signIn}
            style={{ color: "white" }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
