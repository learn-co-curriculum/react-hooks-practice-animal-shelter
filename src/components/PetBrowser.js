import React from "react";

import Pet from "./Pet";

function PetBrowser({pets,onAdoptPet}) {

  return <div className="ui cards">
           {pets.map((item,i)=>(<Pet key={i} pet={item}
                 onAdoptPet={onAdoptPet}
          />))}




  </div>;
}

export default PetBrowser;
