const React = require('react');

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name</a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Gender: Female</p>
            <p>Age: 5</p>
            <p>Weight: 7</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    );
  }
}

module.exports = Pet;
