const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ui cards">
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
      </div>
    );
  }
}

module.exports = PetBrowser;
