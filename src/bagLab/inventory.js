import React, { useState, useEffect } from "react";
import InventoryItem from "./gallery";
import { List, Modal, Grid, Button } from "@mui/material";
import "./inventory.css"; //importing styles
import { Container } from "@mui/system";
import ColorAnimation from "../hero/slideshow"; //color changer

//creating inventory function
export default function Inventory() {
  //creating constants
  const [items, setItems] = useState([]); //items
  const [selectedItem, selectItem] = useState({}); //selectedItem
  const [showModal, setModalOpen] = useState(false); //Modal
  const [characterName, setCharacterName] = useState("See Stats"); //names
  const [characterImg, setCharacterImg] = useState("images/white.png"); //image
  const [characterLevel, setCharacterLevel] = useState(""); //level
  const [characterMoves, setCharacterMoves] = useState(""); //moves

  //on component mount... load data
  //GETTING DATA
  useEffect(() => {
    fetch("data/items.json")
      .then((result) => result.json())
      .then((data) => {
        //STORE DATA
        setItems(data);
      });
  }, []);

  //create out inventory list (characters)
  const itemsList = items.map((item) => (
    <InventoryItem key={item.id} item={item} showInfo={showInfo} />
  ));
  let i = 0;
  console.log(i);

  //returning grid and modal
  return (
    <div>
      {/* the modal */}
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {/* info box in modal */}
        <div id="infoBox">
          <div className="paddingTop">
            <h1>{selectedItem.name} Evolution</h1>
            <ColorAnimation />
            <div className="charImages">
              {selectedItem.details &&
                selectedItem.details.map((detail) => {
                  i++;
                  // returning characters and detail buttons for each
                  return (
                    <div key={selectedItem.id}>
                      <Container
                        sx={{
                          color: "white",
                          width: "100%",
                          height: "175px",
                          padding: "10px",
                          cursor: "none",
                        }}
                      >
                        {/* image */}
                        <img
                          className="modalImage"
                          src={detail.charImage}
                          alt=""
                        ></img>
                      </Container>
                      {/* button */}
                      <Button
                        variant="contained"
                        color="secondary"
                        className="details_button"
                        sx={{
                          color: "white",
                          width: "100%",
                          height: "45px",
                          bottom: "0",
                          backgroundColor: "secondary",
                          cursor: "none",
                          marginTop: "-50px",
                        }}
                        // changing the constants
                        onClick={() => {
                          setCharacterImg(detail.charImage);
                          setCharacterName(detail.charName);
                          setCharacterLevel(detail.level);

                          setCharacterMoves(detail.moves.join(", "));
                          setCharacterImg(detail.charImage);
                        }}
                      >
                        See Details
                      </Button>
                    </div>
                  );
                })}
            </div>
          </div>

          <h2>{characterName}</h2>
          <h6>
            <span className="bold">Level: </span>
            {characterLevel}
          </h6>
          <h6>
            <span className="bold">Moves: </span>
            {characterMoves}
          </h6>
          <img className="modalImage2" src={characterImg} alt=""></img>

          {/*  Closing modal button  */}
          <Button
            variant="contained"
            color="secondary"
            className="details_button"
            sx={{
              color: "white",
              width: "100%",
              marginTop: "20px",
              height: "45px",
              bottom: "0",
              backgroundColor: "secondary",
              borderRadius: "0px 0px 5px 5px",
              cursor: "none",
            }}
            onClick={() => {
              setModalOpen(false);
              setCharacterName("See Stats");
              setCharacterMoves("");
              setCharacterLevel("");
              setCharacterImg("images/white.png");
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
      {/* grid of characters */}
      <Grid container>
        <Grid className="mainDigContainer">
          <h2>Featured Characters</h2>
          <List> {itemsList} </List>
        </Grid>
      </Grid>
    </div>
  );

  //show info function
  function showInfo(itemId) {
    //select the item to be shown -> puts its information into a variable
    selectItem(items[itemId]);
    //show the info
    setModalOpen(true);
  }
}
