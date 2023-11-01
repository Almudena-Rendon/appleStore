import { Grid } from "@mui/material";
import React from "react";
import "./banner.css";

export const Banner = () => {
  return (
    <Grid className="offers">
      <p>
        Save up to 20% on selected products with eligible code. Plus no Shipping
        Cost.
      </p>
      <a href="#">See Offers</a>
    </Grid>
  );
};
