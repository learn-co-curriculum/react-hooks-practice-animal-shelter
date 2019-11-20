import React from "react";
import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => {
          return <Pet key={pet.id} pet={pet} adoptPet={this.props.adoptPet} />;
        })}
      </div>
    );
  }
}

export default PetBrowser;
