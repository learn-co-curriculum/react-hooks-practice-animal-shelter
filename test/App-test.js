import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from '../src/fetch-setup';
import App from '../src/components/App';
import Filters from '../src/components/Filters';
import PetBrowser from '../src/components/PetBrowser';

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  describe('Filters', () => {
    it('should change filter type', () => {
      const wrapper = shallow(<App />);
      wrapper.find(Filters).props().onChangeType('micropig');
      expect(wrapper.state().filters.type).to.equal('micropig');
    });
  });

  describe('Fetching pets', () => {
    beforeEach(() => {
      fetchMock.reset();
    });

    it('should fetch all pets by default', () => {
      const wrapper = shallow(<App />);
      wrapper.find(Filters).props().onFindPetsClick();
      expect(fetchMock.called('/api/pets'), 'The right API URL is not being fetched when finding pets.').to.be.true;
    });

    it('should fetch pet types using the type parameter based on the filter', () => {
      const wrapper = shallow(<App />);

      ['cat', 'dog', 'micropig'].forEach((type) => {
        wrapper.setState({
          filters: Object.assign({}, wrapper.state().filters, {
            type: type
          })
        });
        wrapper.find(Filters).props().onFindPetsClick();
        expect(fetchMock.called(`/api/pets?type=${type}`), 'The right API URL is not being fetched when finding pets.').to.be.true;
      });
    });
  });

  describe('Adopting pets', () => {
    it('should add an adopted pet ID to the state', () => {
      const wrapper = shallow(<App />);
      wrapper.find(PetBrowser).props().onAdoptPet('somePetId');
      expect(wrapper.state().adoptedPets).to.deep.equal(['somePetId']);
    });
  });
});
