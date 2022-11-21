import React, { useState, useEffect } from "react";
import InventoryItem from "./gallery";
import { List, Modal, Grid, CardMedia, Button } from "@mui/material";
import "./inventory.css";
import { Container } from "@mui/system";

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState({});
  const [showModal, setModalOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [characterName, setCharacterName] = useState("See Stats");
  const [characterImg, setCharacterImg] = useState("images/white.png");
  const [characterLevel, setCharacterLevel] = useState("");
  const [characterMoves, setCharacterMoves] = useState("");
  const [buttonColorStyle, setButtonColorStyle] = useState("secondary");
  const [charBGcolor, setcharBGcolor] = useState("#dab7da");

  //on component mount... load data
  useEffect(() => {
    fetch("data/items.json")
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        //STORE DATA
        setItems(data);
      });
  }, []);

  //create out inventory list
  const itemsList = items.map((item) => (
    <InventoryItem
      key={item.id}
      item={item}
      addItem={addItem}
      showInfo={showInfo}
    />
  ));
  let i = 0;

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <div id="infoBox">
          <div>
            <h1>{selectedItem.name}</h1>
            <div className="charImages">
              {selectedItem.details &&
                selectedItem.details.map((detail) => {
                  // console.log(i);
                  i++;
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
                        <img
                          className="modalImage"
                          src={detail.charImage}
                        ></img>
                      </Container>
                      <Button
                        variant="contained"
                        color={buttonColorStyle}
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
          <p>
            <span className="bold">Level: </span>
            {characterLevel}
          </p>
          <p>
            <span className="bold">Moves: </span>
            {characterMoves}
          </p>
          <img className="modalImage2" src={characterImg}></img>

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
      <Grid container>
        <Grid className="hello">
          <h2>Digimon</h2>
          <List> {itemsList} </List>
        </Grid>
      </Grid>
    </div>
  );

  function showInfo(itemId) {
    //select the item to be shown -> puts its information into a variable
    selectItem(items[itemId]);
    //show the info
    setModalOpen(true);
  }

  function addItem(itemId) {
    setBagItems([...bagItems, items[itemId]]);
    console.log(bagItems);
  }
}

// function gettingMoves(moves) {
//   // console.log(moves);
//   let spring = "";
//   console.log(moves.length);
//   for (let i = 0; i < moves.length; i++) {
//     console.log(moves[i]);
//     spring = spring += `<li> ` + moves[i] + `</li>`;
//     console.log(spring);
//   }
// }
