import { Grid } from "@mui/material";
import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <Grid container className="navbar">
      <Grid className="logo">
        <img src="/images/apple-logo.png" alt="logo" />
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
        <img src="/images/search-icon.png" alt="search-icon" />
        <img src="/images/shopping-bag.png" alt="shopping-bag" />
      </Grid>
    </Grid>
  );
};
