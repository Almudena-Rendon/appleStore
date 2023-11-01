import { Grid } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <Grid container className="navbar">
      <Grid className="logo">
        <AppleIcon />
      </Grid>
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
      <Grid className="nav-icons">
        <ShoppingBagOutlinedIcon />
      </Grid>
    </Grid>
  );
};
