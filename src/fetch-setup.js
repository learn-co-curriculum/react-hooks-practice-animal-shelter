require('whatwg-fetch');
const fetchMock = require('fetch-mock');
const { getAll, getByType } = require('./data/pets');

fetchMock.get('/api/pets', getAll());
fetchMock.get('/api/pets?type=cat', getByType('cat'));
fetchMock.get('/api/pets?type=dog', getByType('dog'));
fetchMock.get('/api/pets?type=micropig', getByType('micropig'));

module.exports = fetchMock;
