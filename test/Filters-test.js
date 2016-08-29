const React = require('react');
const {shallow} = require('enzyme');
const sinon = require('sinon');

const Filters = require('../components/Filters');

const FILTERS_STATE = {
  type: 'all',
};

describe('<Filters />', function () {
  describe('Animal type', function () {
    it('should set the value of the animal type select to the right filter value', function () {
      const wrapper = shallow(<Filters filters={Object.assign({}, FILTERS_STATE, { type: 'micropig' })}/>);
      expect(wrapper.find('select').props().value).toEqual('micropig');
    });

    it('should call the `onChangeType` prop callback when the animal type select changes', function () {
      const spy = sinon.spy();
      const wrapper = shallow(<Filters onChangeType={spy} filters={FILTERS_STATE}/>);
      wrapper.find('select').simulate('change', {target: {value: 'dog'}});
      expect(spy.calledOnce).toBeTruthy();
      expect(spy.firstCall.args[0]).toEqual('dog');
    });
  });

  describe('Finding pets', function () {
    it('should call the `onFindPetsClick` callback prop when the "Find pets" button is clicked', function () {
      const spy = sinon.spy();
      const wrapper = shallow(<Filters onFindPetsClick={spy} filters={FILTERS_STATE}/>);
      wrapper.find('button.secondary.button').simulate('click');
      expect(spy.calledOnce).toBeTruthy();
    });
  });
});
