const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
      </div>
    );
  }
}

module.exports = PetBrowser;
