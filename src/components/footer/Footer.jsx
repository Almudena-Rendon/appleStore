import { Grid } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    // <Grid container className="footer">
    //   <Grid item xs={12}>
    //     Apple Online Store
    //   </Grid>
    //   <Grid container justify="space-between">
    //     <Grid item xs={12} md={4} lg={4}>
    //       <ul className="items-list">
    //         <li>Shop and Learn</li>
    //         <li>Store</li>
    //         <li>Mac</li>
    //         <li>iPad </li>
    //         <li>iPhone </li>
    //         <li>Watch </li>
    //         <li>AirPods </li>
    //         <li>TV & Home </li>
    //         <li>AirTag </li>
    //       </ul>
    //     </Grid>
    //     <Grid item xs={12} md={4} lg={4}>
    //       <ul>
    //         <li>Apple Podcasts </li>
    //         <li>Account</li>
    //         <li>Manage Your Apple ID</li>
    //         <li>Apple Store Account</li>
    //         <li>iCloud.com</li>
    //         <li>Entertainment</li>
    //         <li>Apple TV+</li>
    //         <li>Apple Music</li>
    //         <li>Apple Arcade</li>
    //       </ul>
    //     </Grid>
    //     <Grid item xs={12} md={4} lg={4}>
    //       <ul>
    //         <li>Apple Values</li>
    //         <li> Accessibility</li>
    //         <li> Environment</li>
    //         <li> Privacy</li>
    //         <li> Supplier Responsibility</li>
    //         <li> About Apple </li>
    //         <li> Newsroom </li>
    //         <li> Apple Leadership </li>
    //         <li> Career Opportunities </li>
    //         <li> Ethics & Compliance </li>
    //         <li> Events </li>
    //         <li> Contact Apple </li>
    //       </ul>
    //     </Grid>
    //   </Grid>
    // </Grid>
    <Grid class="menu-items">
      <Grid class="store">
        <AppleIcon style={{ color: "#77777b", paddingRight: "5px" }} />
        <p>Apple Online Store</p>
      </Grid>
      <Grid class="menu-list">
        <ul>
          <li>Shop and Learn</li>
          <li> Store</li>
          <li>Mac</li>
          <li>iPad </li>
          <li>iPhone </li>
          <li>Watch </li>
          <li>AirPods </li>
          <li> TV & Home </li>
          <li>AirTag </li>
        </ul>
        <ul>
          <li>Apple Podcasts </li>
          <li>Account</li>
          <li>Manage Your Apple ID</li>
          <li> Apple Store Account</li>
          <li> iCloud.com</li>
          <li>Entertainment</li>
          <li> Apple TV+</li>
          <li> Apple Music</li>
          <li>Apple Arcade</li>
        </ul>
        <ul>
          <li>Apple Values</li>
          <li> Accessibility</li>
          <li> Environment</li>
          <li> Privacy</li>
          <li> Supplier Responsibility</li>
          <li> About Apple </li>
          <li> Newsroom </li>
          <li> Apple Leadership </li>
          <li> Career Opportunities </li>
          <li> Ethics & Compliance </li>
          <li> Events </li>
          <li> Contact Apple </li>
        </ul>
      </Grid>
      <Grid class="footer">
        <p>
          Copyright © 2023 Apple Inc. All rights reserved. Privacy Policy Terms
          of Use Sales Policy Legal Site Map{" "}
        </p>
      </Grid>
    </Grid>
  );
};
