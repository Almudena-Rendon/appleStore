import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./navbar-responsive.css";
import { HamburgerButton } from "../common/HamburgerButton";
import { AppBar, Box, Grid } from "@mui/material";

export const NavBarResponsive = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setClicked(false);
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <>
      <AppBar position="sticky">
        <Grid container className="navbar">
          <Box className="logo">
            <AppleIcon />
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "none", lg: "flex" },
            }}
            className={`links ${clicked} ? "active" : ""`}
          >
            <ul>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>Entertainment</li>
              <li>Accesories</li>
              <li>Support</li>
            </ul>
          </Box>
          <Box className="nav-icons">
            <ShoppingBagOutlinedIcon />
            <Box className="burguer">
              <HamburgerButton clicked={clicked} handleClick={handleClick} />
            </Box>
          </Box>
          <Box className={`initial ${clicked ? " active" : ""}`}>
            <ul>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>Entertainment</li>
              <li>Accesories</li>
              <li>Support</li>
            </ul>
          </Box>
        </Grid>
      </AppBar>
    </>
  );
};
