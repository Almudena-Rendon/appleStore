import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import "./navbar.css";

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  useEffect(() => {
    if (isToggle && isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isToggle, isVisible]);

  const handleOpenResponsiveNavbar = () => {
    setIsToggle(true);
    // setIsVisible(true);
  };

  const handleCloseResponsiveNavbar = () => {
    setIsToggle(false);
    // setIsVisible(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setIsVisible(false);
      // setIsToggle(false);
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <>
      <Grid container className={isSticky ? "navbar sticky" : "navbar"}>
        {!isToggle && (
          <Grid className="logo">
            <AppleIcon />
          </Grid>
        )}
        <Box
          sx={{
            flexGrow: 0,
            display: { xs: "none", md: "none", lg: "flex" },
          }}
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
        <Grid className="nav-icons">
          {!isToggle && (
            <Box>
              <ShoppingBagOutlinedIcon />
            </Box>
          )}
          <Box className="nav-icons-responsive">
            {!isToggle && (
              <DragHandleIcon
                onClick={handleOpenResponsiveNavbar}
                id="menuToggle"
              />
            )}
          </Box>
        </Grid>
      </Grid>
      {isToggle && (
        <Box
          sx={{
            display: { lg: "none" },
            position: "relative",
          }}
          className={`responsive-navbar ${isVisible && isToggle ? "show" : ""}`}
        >
          {isToggle && (
            <>
              <CloseIcon
                onClick={handleCloseResponsiveNavbar}
                className="close-icon"
                sx={{
                  position: "absolute",
                  height: "60px",
                  marginRight: "10px",
                  top: -20,
                  right: 0,
                }}
              />
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
            </>
          )}
        </Box>
      )}
    </>
  );
};
