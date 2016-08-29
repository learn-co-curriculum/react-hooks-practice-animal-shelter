const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="ui divider"></div>

        <h3>Weight</h3>
        <div className="field">
          <label>From</label>
          <input type="number" />
        </div>
        <div className="field">
          <label>From</label>
          <input type="number" />
        </div>
      </form>
    );
  }
}

module.exports = Filters;
