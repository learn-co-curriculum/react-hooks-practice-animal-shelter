const React = require('react');
const {shallow} = require('enzyme');
const sinon = require('sinon');

const { getAll } = require('../data/pets');
const Pet = require('../components/Pet');
const PetBrowser = require('../components/PetBrowser');

const ALL_PETS = getAll();
const ADOPTED_PETS = [ALL_PETS[0].id];

describe('<PetBrowser />', function () {
  it('should render Pet components based on its props', function () {
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} />);
    expect(wrapper.find(Pet).length).toEqual(ALL_PETS.length);
  });

  it('should pass an `onAdoptPet` callback prop to its children Pet components', function () {
    const noop = () => {};
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} onAdoptPet={noop} />);
    expect(wrapper.find(Pet).nodes.every(node => node.props.onAdoptPet === noop)).toBeTruthy();
  });

  it('should pass an `isAdopted` prop to its children Pet components', function () {
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} />);
    expect(wrapper.find(Pet).nodes.every(node => node.props.isAdopted !== undefined)).toBeTruthy();
  });

  it('should determine the `isAdopted` prop for its children based on its `adoptedPets` prop', function () {
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} adoptedPets={ADOPTED_PETS} />);
    expect(wrapper.find(Pet).nodes[0].props.isAdopted).toBeTruthy();
    expect(wrapper.find(Pet).nodes.slice(1).every(node => node.props.isAdopted === false)).toBeTruthy();
  });
});
