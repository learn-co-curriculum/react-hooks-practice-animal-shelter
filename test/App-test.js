const React = require('react');
const {shallow} = require('enzyme');
const sinon = require('sinon');

const fetchMock = require('../fetch-setup');
const App = require('../components/App');
const Filters = require('../components/Filters');
const PetBrowser = require('../components/PetBrowser');

describe('<App />', function () {
  describe('Filters', function () {
    it('should change filter type', function () {
      const wrapper = shallow(<App />);
      wrapper.find(Filters).props().onChangeType('micropig');
      expect(wrapper.state().filters.type).toEqual('micropig');
    });
  });

  describe('Fetching pets', function () {
    beforeEach(() => {
      fetchMock.reset();
    });

    it('should fetch all pets by default', function () {
      const wrapper = shallow(<App />);
      wrapper.find(Filters).props().onFindPetsClick();
      expect(fetchMock.called('/api/pets')).toBeTruthy('The right API URL is not being fetched when finding pets.');
    });

    it('should fetch pet types using the type parameter based on the filter', function () {
      const wrapper = shallow(<App />);

      ['cat', 'dog', 'micropig'].forEach((type) => {
        wrapper.setState({
          filters: Object.assign({}, wrapper.state().filters, {
            type: type
          })
        });
        wrapper.find(Filters).props().onFindPetsClick();
        expect(fetchMock.called(`/api/pets?type=${type}`)).toBeTruthy('The right API URL is not being fetched when finding pets.');
      });
    });
  });

  describe('Adopting pets', function () {
    it('should add an adopted pet ID to the state', function () {
      const wrapper = shallow(<App />);
      wrapper.find(PetBrowser).props().onAdoptPet('somePetId');
      expect(wrapper.state().adoptedPets).toEqual(['somePetId']);
    });
  });
});
