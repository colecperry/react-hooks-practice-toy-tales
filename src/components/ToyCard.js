import React from "react";


function ToyCard({toy, handleDelete, patchToys}) {
  
// Deliverable Delete, Step 2: Within the function, we did a fetch request to delete the toy from the server
// by passing the Toy's ID through the URL, if the request is successful we should see it reflect within the DB.JSON File
// We then pass the ID into the handleDelete function, which lives on the app component and where the state is. 

  const deleteToy = (id) => {
    fetch(`http://localhost:3001/toys/${id}`,{
      method: 'DELETE'
    }).then(resp => resp.json())
      .then(data => {
      console.log(data);
      handleDelete(id);
    }).catch(err => console.log(err));
  }

  const addLike = (id) => {
    let patchedToy = {
      ...toy,
      likes: toy.likes+1
    }
    fetch(`http://localhost:3001/toys/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchedToy)})
      .then(resp => resp.json())
      .then(data => {
      console.log(data);
      patchToys(patchedToy)
    }).catch(err => console.log(err))
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.id}</p>
      <p>{toy.likes} Likes </p>
      <button onClick={() => addLike(toy.id)} className="like-btn">Like {"<3"}</button>
      <button onClick={() => deleteToy(toy.id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}
// Deliverable Delete, Step 1: Add onClick event listener to the "Donate to Goodwill" button
// pointed the click to a deleteToy function, passing in each toy's ID as an argument

export default ToyCard;
