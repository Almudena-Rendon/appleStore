import React from "react";
import { Card } from "../common/Card";
import { Grid } from "@mui/material";
import "./main-section.css";
import AppleIcon from "@mui/icons-material/Apple";

export const MainSection = () => {
  return (
    <Grid>
      <Grid>
        <Card
          className={"iphone-light-card"}
          CardTitle={"iPhone 15"}
          CardSubtitle={"New Camera. New Design. Newphoria."}
          Link={
            <>
              <a href="#">Learn More {">"}</a>
              <a href="#">Buy {">"}</a>
            </>
          }
        />
      </Grid>
      <Grid>
        <Card
          className={"macpro-light-card"}
          CardTitle={"MacBook Pro"}
          CardSubtitle={"Mind-blowing. Head turning."}
          AdditionalInfo={"Available starting 11.7"}
          Link={
            <>
              <a href="#">Learn More {">"}</a>
              <a href="#">Order now {">"}</a>
            </>
          }
        />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            className={"imac-light-card"}
            CardTitle={"iMac"}
            CardSubtitle={"Packed with more juice."}
            AdditionalInfo={"Available starting 11.7"}
            Link={
              <>
                <a href="#">Learn More {">"}</a>
                <a href="#">Order now {">"}</a>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            className={"apple-watch-dark-card"}
            CardTitle={"Apple Watch"}
            CardSubtitle={"Smarter. Brighter. Mightier."}
            Link={
              <>
                <a href="#">Learn More {">"}</a>
                <a href="#">Buy {">"}</a>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            className={"ipad-light-card"}
            CardTitle={"iPad"}
            CardSubtitle={"Lovable. Drawable. Magical."}
            Link={
              <>
                <a href="#">Learn More {">"}</a>
                <a href="#">Buy {">"}</a>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            className={"airpods-dark-card"}
            CardTitle={"AirPods Pro"}
            CardSubtitle={"Adaptive Audio. Now playing."}
            Link={
              <>
                <a href="#">Learn More {">"}</a>
                <a href="#">Buy {">"}</a>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            className={"apple-card-light-card"}
            CardTitle={
              <>
                <AppleIcon className="apple-icon" /> Card
              </>
            }
            CardSubtitle={"Get up to 3% Daily Cash with every purchase."}
            Link={
              <>
                <a href="#">Learn More {">"}</a>
                <a href="#">Apply now {">"}</a>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            className={"tradein-light-card"}
            CardTitle={
              <>
                <AppleIcon className="apple-icon" /> Trade In
              </>
            }
            CardSubtitle={
              "Get $200–$650 in credit toward iPhone 15 Pro when you trade in iPhone 11 or higher."
            }
            Link={
              <>
                <a href="#">See what your device is worth {">"}</a>
              </>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
