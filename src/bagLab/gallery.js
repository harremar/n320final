import React, { useState } from "react";
import { Button, CardMedia, ListItem, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import "./card.css";

export default function InventoryItem(props) {
  const [cardColor, setCardColor] = useState("#fafafa");

  const appStyles = {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    minHeight: "420px",
    backgroundColor: `${cardColor}`,
  };

  return (
    <div className="container">
      <Grid spacing={1}>
        <Card
          className="cardHover"
          style={appStyles}
          onMouseOver={() => setCardColor("#efefef")}
          onMouseOut={() => setCardColor("#fafafa")}
        >
          <CardMedia
            component="img"
            height="250"
            image={props.item.image}
            alt={props.item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.item.desc}
            </Typography>
          </CardContent>
          <CardActions className="button_container">
            <Button
              variant="contained"
              color="secondary"
              className="details_button"
              sx={{
                color: "white",
                width: "264px",
                height: "45px",
                backgroundColor: "secondary",
                cursor: "none",
              }}
              onClick={() => {
                props.showInfo(props.item.id);
              }}
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
