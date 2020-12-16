import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { getAll } from "../mocks/data";
import Pet from "../components/Pet";
import PetBrowser from "../components/PetBrowser";

Enzyme.configure({ adapter: new Adapter() });

const ALL_PETS = getAll();

describe("<PetBrowser />", () => {
  it("should render Pet components based on its props", () => {
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} />);
    expect(wrapper.find(Pet).length).to.equal(ALL_PETS.length);
  });

  it("should pass an `onAdoptPet` callback prop to its children Pet components", () => {
    const noop = () => {};
    const wrapper = shallow(<PetBrowser pets={ALL_PETS} onAdoptPet={noop} />);
    expect(
      wrapper
        .find(Pet)
        .getElements()
        .every((node) => node.props.onAdoptPet === noop)
    ).to.be.true;
  });
});
