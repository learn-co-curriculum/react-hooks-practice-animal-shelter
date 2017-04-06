import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Pet from '../components/Pet';

const MALE_DOG = {
  "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
  "type": "dog",
  "gender": "male",
  "age": 8,
  "weight": 6,
  "name": "Kennedy"
};

const FEMALE_CAT = {
  "id": "86520b4b-7849-4462-b511-cddc7f416ad6",
  "type": "cat",
  "gender": "female",
  "age": 7,
  "weight": 6,
  "name": "Cuddles"
};

const GENDER_ICON_MALE = '♂';
const GENDER_ICON_FEMALE = '♀';

describe('<Pet />', function () {
  describe('Rendering props', function () {
    it('should render the name', function () {
      const wrapper = shallow(<Pet pet={MALE_DOG} />);
      expect(wrapper.text().includes(MALE_DOG.name)).toBeTruthy();
    });

    it('should render the correct gender icon for male pets', function () {
      const wrapper = shallow(<Pet pet={MALE_DOG} />);
      expect(wrapper.text().includes(GENDER_ICON_MALE) && !wrapper.text().includes(GENDER_ICON_FEMALE)).toBeTruthy();
    });

    it('should render the correct gender icon for female pets', function () {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(GENDER_ICON_FEMALE) && !wrapper.text().includes(GENDER_ICON_MALE)).toBeTruthy();
    });

    it('should render the pet type', function () {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.type)).toBeTruthy();
    });

    it('should render the pet age', function () {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.age)).toBeTruthy();
    });

    it('should render the pet weight', function () {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.weight)).toBeTruthy();
    });
  });

  describe('Adopting a pet', function () {
    describe('Pet is not adopted yet', function () {
      it('should only show the adopt button', function () {
        const wrapper = shallow(<Pet pet={FEMALE_CAT} isAdopted={false} />);
        expect(wrapper.find('button.ui.primary.button').length === 1 && wrapper.find('button.ui.disabled.button').length === 0).toBeTruthy();
      });

      it('should call the `onAdoptPet` callback prop when the adopt button is clicked', function () {
        const spy = sinon.spy();
        const wrapper = shallow(<Pet pet={FEMALE_CAT} isAdopted={false} onAdoptPet={spy} />);
        wrapper.find('button.ui.primary.button').simulate('click');
        expect(spy.calledOnce).toBeTruthy();
        expect(spy.firstCall.args[0]).toEqual(FEMALE_CAT.id);
      });

      it('should call the `onAdoptPet` callback prop with the pet ID', function () {
        const spy = sinon.spy();
        const wrapper = shallow(<Pet pet={FEMALE_CAT} isAdopted={false} onAdoptPet={spy} />);
        wrapper.find('button.ui.primary.button').simulate('click');
        expect(spy.firstCall.args[0]).toEqual(FEMALE_CAT.id);
      });
    });

    describe('Pet is already adopted', function () {
      it('should only show the already adopted button', function () {
        const wrapper = shallow(<Pet pet={FEMALE_CAT} isAdopted={true} />);
        expect(wrapper.find('button.ui.disabled.button').length === 1 && wrapper.find('button.ui.primary.button').length === 0).toBeTruthy();
      });

      it('should not call the `onAdoptPet` callback prop when the button is clicked', function () {
        const spy = sinon.spy();
        const wrapper = shallow(<Pet pet={FEMALE_CAT} isAdopted={true} onAdoptPet={spy} />);
        wrapper.find('button.ui.disabled.button').simulate('click');
        expect(spy.called).toBeFalsy();
      });
    });
  });
});
