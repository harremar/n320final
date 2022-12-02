import React, { useState } from "react";
import { Button, CardMedia, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import "./card.css"; //importing styling

//creating inventoryitem function
export default function InventoryItem(props) {
  //creating constants for card
  const [cardColor, setCardColor] = useState("#fafafa");

  const appStyles = {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    minHeight: "420px",
    backgroundColor: `${cardColor}`,
  };

  //returning the cards
  return (
    <div className="container">
      <Grid spacing={1} className="center">
        {/* card styling--when hover change card color */}
        <Card
          className="cardHover"
          style={appStyles}
          onMouseOver={() => setCardColor("#efefef")}
          onMouseOut={() => setCardColor("#fafafa")}
        >
          {/* getting the main character image */}
          <CardMedia
            component="img"
            height="250"
            image={props.item.image}
            alt={props.item.image}
          />
          <CardContent>
            {/* getting characters name */}
            <Typography gutterBottom variant="h5" component="div">
              {props.item.name}
            </Typography>
            {/* getting characters description */}
            <Typography variant="body2" color="text.secondary">
              {props.item.desc}
            </Typography>
          </CardContent>
          <CardActions className="button_container">
            {/* creating  DETAIL button */}
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
              // when clicked show the modal
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
