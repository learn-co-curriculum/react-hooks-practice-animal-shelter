import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { getAll } from '../src/data/pets';
import Pet from '../src/components/Pet';
import PetBrowser from '../src/components/PetBrowser';

Enzyme.configure({ adapter: new Adapter() })

const ALL_PETS = getAll();
const ADOPTED_PETS = [ALL_PETS[0].id];

describe('<PetBrowser />', () => {
  it('should render Pet components based on its props', () => {
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} />);
    expect(wrapper.find(Pet).length).to.equal(ALL_PETS.length);
  });

  it('should pass an `onAdoptPet` callback prop to its children Pet components', () => {
    const noop = () => {};
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} onAdoptPet={noop} />);
    expect(wrapper.find(Pet).getElements().every(node => node.props.onAdoptPet === noop)).to.be.true;
  });

  it('should pass an `isAdopted` prop to its children Pet components', () => {
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} />);
    expect(wrapper.find(Pet).getElements().every(node => node.props.isAdopted !== undefined)).to.be.true;
  });

  it('should determine the `isAdopted` prop for its children based on its `adoptedPets` prop', () => {
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} />);
    expect(wrapper.find(Pet).getElements()[0].props.isAdopted).to.be.true;
    expect(wrapper.find(Pet).getElements().slice(1).every(node => node.props.isAdopted === false)).to.be.true;
  });
});
