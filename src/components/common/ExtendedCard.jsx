import React from "react";
import { Grid } from "@mui/material";
import "./extended-card.css";

export const ExtendedCard = ({
  className,
  CardTitle,
  CardSubtitle,
  Link,
  AdditionalInfo,
}) => {
  return (
    <Grid className={`${className} body-extended-card`}>
      <Grid className="main-title-extended-card">
        <h1>{CardTitle}</h1>
        <p className="subtitle-extended-card">{CardSubtitle}</p>
        {AdditionalInfo && (
          <p className="additional-info-extended-card">{AdditionalInfo}</p>
        )}
        <Grid className="link-extended-card">{Link}</Grid>
      </Grid>
    </Grid>
  );
};
