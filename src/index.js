import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(<App />, document.getElementById('root'));
