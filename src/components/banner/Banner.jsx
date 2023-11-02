import { Grid } from "@mui/material";
import React from "react";
import "./banner.css";

export const Banner = () => {
  return (
    <Grid className="offers">
      <p>
        Get $200–$650 in credit toward iPhone 15 Pro when you trade in iPhone 11
        or higher.
      </p>
      <a href="#">Learn More {">"}</a>
    </Grid>
  );
};
