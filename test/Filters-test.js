import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Filters from '../src/components/Filters';

Enzyme.configure({ adapter: new Adapter() })

const FILTERS_STATE = {
  type: 'all',
};

describe('<Filters />', () => {
  describe('Animal type', () => {
    it('should set the value of the animal type select to the right filter value', () => {
      const wrapper = shallow(<Filters filters={Object.assign({}, FILTERS_STATE, { type: 'micropig' })}/>);
      expect(wrapper.find('select').props().value).to.equal('micropig');
    });

    it('should call the `onChangeType` prop callback when the animal type select changes', () => {
      const spy = sinon.spy();
      const wrapper = shallow(<Filters onChangeType={spy} filters={FILTERS_STATE}/>);
      wrapper.find('select').simulate('change', {target: {value: 'dog'}});
      expect(spy.calledOnce).to.be.true;
      expect(spy.firstCall.args[0]).to.equal('dog');
    });
  });

  describe('Finding pets', () => {
    it('should call the `onFindPetsClick` callback prop when the "Find pets" button is clicked', () => {
      const spy = sinon.spy();
      const wrapper = shallow(<Filters onFindPetsClick={spy} filters={FILTERS_STATE}/>);
      wrapper.find('button.secondary.button').simulate('click');
      expect(spy.calledOnce).to.be.true;
    });
  });
});
