import React from 'react';

const Filters = ({ onChangeType, onFindPetsClick }) => (
  <div className="ui form">
    <h3>Animal type</h3>
    <div className="field">
      <select name="type" id="type" onChange={onChangeType}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
    </div>

    <div className="field">
      <button onClick={onFindPetsClick} className="ui secondary button">
        Find pets
      </button>
    </div>
  </div>
);

export default Filters;
