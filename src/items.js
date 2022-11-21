import React, { useState, useEffect } from "react";
import { List, Modal, Grid } from "@mui/material";

export default function Items() {
  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState({});
  const [showModal, setModalOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);

  // setData() {
  //   //set data with local storage
  //   let obj = { name: "john", age: 12, email: "johnh@gmail.com" };
  //   localStorage.setItem("myData", JSON.stringify(obj));
  // }

  // getData() {
  //   let data = localStorage.getItem("myData");
  //   data = JSON.parse(data);
  //   console.log(data.name);
  //   console.log("hello");
  // }

  //on component mount... load data
  useEffect(() => {
    fetch("data/items.json")
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        // console.log(data[0].firstName);
        //STORE DATA
        setItems(data);
      });
  }, []);

  //create out inventory list
  const itemsList = items.map((item) => <div key={item.id}>{items}</div>);

  return (
    <div>
      <h1>This Will be the title</h1>
      {itemsList}
    </div>
  );
}
