import { Grid } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <Grid class="menu-items">
      <Grid class="store">
        <AppleIcon style={{ color: "#77777b", paddingRight: "5px" }} />
        <p>Apple Online Store</p>
      </Grid>
      <Grid class="menu-list">
        <ul>
          <li>Shop and Learn</li>
          <li>Store</li>
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
          <li>Apple Store Account</li>
          <li>iCloud.com</li>
          <li>Entertainment</li>
          <li>Apple TV+</li>
          <li>Apple Music</li>
          <li>Apple Arcade</li>
        </ul>
        <ul>
          <li>Apple Values</li>
          <li>Accessibility</li>
          <li>Environment</li>
          <li>Privacy</li>
          <li>Supplier Responsibility</li>
          <li>About Apple </li>
          <li>Newsroom </li>
          <li>Apple Leadership </li>
          <li>Career Opportunities </li>
          <li>Ethics & Compliance </li>
          <li>Events </li>
          <li>Contact Apple </li>
        </ul>
      </Grid>
      <Grid class="footer-copyright">
        <p>Copyright © 2023 Almudena Rendón Fernández.</p>
      </Grid>
      <Grid class="menu-info">
        <p>
          This website is a project created for educational purposes only. The
          content, design, and layout are based on the official Apple website
          and are intended to showcase the skills of the creator. All content
          and images used on this website are the property of Apple Inc. and are
          used solely for educational purposes. Apple Inc. does not endorse or
          sponsor this project in any way. All copyrights, trademarks, and other
          intellectual property rights for the content and images used on this
          website belong to Apple Inc. and are used under fair use guidelines.
          If you have any questions or concerns regarding this project, please
          contact the creator directly.
        </p>
      </Grid>
    </Grid>
  );
};
