import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

// Deliverable RenderToys, Step 1: Set state for for toys array from fetch
// Deliverable RenderToys, Step 2: Use useEffect hook to fetch toys and then set the fetched array to our state

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://api.musixmatch/ws/1.1/track_id")
    .then(resp => resp.json())
    .then(setToys)
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleNewToy = (shinyNewToy) => {
    setToys([...toys, shinyNewToy])
  }

// Deliverable Delete, Step 3: We pass in each id and filter each 

  const handleDelete = (id) => {
    // JavaScript filter function has a prototype:
    // Array.filter(toy="each item in the array" => toy.id="each individual toy" !== id="id from the toy we clicked")
    let filteredResult = toys.filter(toy => toy.id !== id);
    // for each toy in the array, return to me each toy that does not have the id of the one we clicked
    setToys(filteredResult);
    // set state to the filtered array
    // make sure to send handleDeleteFunction down as props to the container and card
  }

  const patchToys = (patchedToy) => {
    console.log(`patchedToy: ${patchedToy}`);
    // use a Slice function
    console.log(`patchedToysArray: ${patchedToysArray}`);
    // setToys(patchedToysArray);
  }

  // const multiply = (x, y) => {
  //   let result = x * y;
  //   return result;
  // }

  // const l = 4;
  // const m = 5;
  // console.log(multiply(l,m)); // 20

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} patchToys={patchToys} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
