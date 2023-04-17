import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, patchToys}) {

const toysRender = toys.map((toy) => {
  return <ToyCard toy={toy} key={toy.id} patchToys={patchToys} handleDelete={handleDelete}/>
})

  return (
    <div id="toy-collection">
    {toysRender}
      </div>
  );
}

export default ToyContainer;
