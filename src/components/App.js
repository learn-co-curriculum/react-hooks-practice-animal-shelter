import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const handlePetsClick = async () => {
    let request;

    if (filters.type === "all") {
      request = await fetch("http://localhost:3001/pets");
    }

    request = await fetch(`http://localhost:3001/pets?type=${filters.type}`);

    const data = await request.json();
    setPets(data.pets);
  };

  const handleChangeType = (e) => {
    setFilters({ type: e.target.value });
  };

  const handlePetAdopt = (id) => {
    setPets(
      pets.map((pet) => {
        if (pet.id === id) {
          return { ...pet, isAdopted: true };
        }
        return pet;
      })
    );
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onFindPetsClick={handlePetsClick}
              onChangeType={handleChangeType}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handlePetAdopt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
