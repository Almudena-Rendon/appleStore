import React from "react";
import { Grid } from "@mui/material";
import "./card.css";

export const Card = ({
  className,
  CardTitle,
  CardSubtitle,
  Link,
  AdditionalInfo,
}) => {
  return (
    <Grid className={`${className} body`}>
      <Grid className="main-title">
        <h1>{CardTitle}</h1>
        <p className="subtitle">{CardSubtitle}</p>
        {AdditionalInfo && <p className="additional-info">{AdditionalInfo}</p>}
        <Grid className="link">{Link}</Grid>
      </Grid>
    </Grid>
  );
};
