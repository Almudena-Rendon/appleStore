import { Grid } from "@mui/material";
import React from "react";
import { Banner } from "../banner/Banner";
import "./hero-section.css";
import { ExtendedCard } from "../common/Card";

export const HeroSection = () => {
  return (
    <Grid>
      <Banner />
      <Grid className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/videos/iphone-15-pro.mp4" type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
};
