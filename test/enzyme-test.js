import React from 'react';

import DailyForecasts from '../lib/app/component/DailyForecasts'
import LocationButton from '../lib/app/component/LocationButton';
import LocationSearch from '../lib/app/component/LocationSearch';
import App from '../lib/app/App';
import { shallow,mount, render} from 'enzyme';
import { expect } from 'chai';

describe('<App/>', () => {
  it('should have a prop of title', () => {
    const title = 'test title';
    const wrapper = shallow(<App title={title} />);
    expect(wrapper.contains(title)).to.equal(true);
  })

  it('should have LocationSearch, LocationButton, and ClearButton', () => {
    const wrapper = shallow(<App />)
    const LocationSearch= wrapper.find('LocationSearch')
    const LocationButton = wrapper.find('LocationButton')
    const ClearButton = wrapper.find('ClearButton')
    expect(LocationSearch).to.have.length(1)
    expect(LocationButton).to.have.length(1)
    expect(ClearButton).to.have.length(1)
  })

  it('should update state when I add a forecast to the page', () => {
    const wrapper = mount(<App />);
    const city = wrapper.find('.location-input');
    const state = wrapper.find('.state-input');
    const submit = wrapper.find('.location-button');
    city.simulate('change', city.node.value = 'oakland')
    state.simulate('change', state.node.value = 'california')
    submit.simulate('click')
    expect(wrapper.state().city).to.equal('oakland')
    expect(wrapper.state().state).to.equal('california')
  })


    it.skip('should have a link to an API as a prop', () => {
      const wrapper = shallow(<App url="https://api.wunderground.com/api/665cd45e10100c6b/"/>);
      expect(wrapper.find(url).at(0).props().url).to.equal("https://api.wunderground.com/api/665cd45e10100c6b/");

    })

    it.skip('should have unordered list with nested list elements', () => {
      const wrapper = mount(<App />);
      const city = wrapper.find('.location-input');
      const state = wrapper.find('.state-input');
      const submit = wrapper.find('.location-button');
      city.simulate('change', city.node.value = 'oakland')
      state.simulate('change', state.node.value = 'california')
      submit.simulate('click')
      submit.simulate('click')
      submit.simulate('click')
      submit.simulate('click')
      console.log(wrapper.debug());
      expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
    })

    it('should display its title in the header using props', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<h3 className="title">{wrapper.props.title}</h3>)).to.equal(true);

    })

    it('should display its title in the header using props', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<h3 className="title">{wrapper.props.title}</h3>)).to.equal(true);

    })


})
