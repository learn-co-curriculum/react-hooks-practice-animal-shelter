import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  

  function onChangeType(e) {
    setFilters(e.target.value)
  }

  function onFindPetsClick() {
    
    if (filters === "cat") {
      
  fetch("http://localhost:3001/pets?type=cat")
        .then(r => r.json())
        .then((data) => {
          setPets(data)
        })

     
    }
    else if (filters === "dog") {
      const fetchData = async () => {
        const result = await fetch("http://localhost:3001/pets?type=dog ");
        const data = await result.json();
         setPets(
        data
      )
      }
     
    }
    else if (filters === "micropig") {
      const fetchData = async () => {
        const result = await fetch("http://localhost:3001/pets?type=micropig ");
        const data = await result.json();
        setPets(
        data
      )
      }
      
    }
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}
 />
 
          </div>
          <div className="twelve wide column">
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
