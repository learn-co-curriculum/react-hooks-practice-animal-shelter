import React from "react";

function Pet({pet,onAdoptPet}) {
 let {name,type,age,weight,isAdopted}=pet
 let Adopted=`ui ${isAdopted?"":"disabled"} button`
 let isAdoptedCss=`ui primary ${isAdopted?"disabled":" "} button`
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
       {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={Adopted} >Already adopted</button>
        <button className={isAdoptedCss} onClick={onAdoptPet}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
