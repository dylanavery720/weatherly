import React from 'react';

import Summary from '../lib/app/component/Summary';
import DailyForecasts from '../lib/app/component/DailyForecasts';
import Button from '../lib/app/component/Button';
import Search from '../lib/app/component/Search';

import App from '../lib/app/App';
import { shallow,mount, render} from 'enzyme';
import { expect } from 'chai';

describe('<App/>', () => {
  it('should have a prop of title', () => {
    const title = 'test title';
    const wrapper = shallow(<App title={title} />);
    expect(wrapper.contains(title)).to.equal(true);
  })

  it('should have two searches and two buttons', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug())
    const Search= wrapper.find('Search')
    const Button = wrapper.find('Button')
    expect(Search).to.have.length(2)
    expect(Button).to.have.length(2)
  })

  it('should update state when I add a forecast to the page', () => {
    const wrapper = mount(<App />);
    const city = wrapper.find('#citytest');
    const state = wrapper.find('#statetest');
    const submit = wrapper.find('.location-button');
    city.simulate('change', city.node.value = 'oakland')
    state.simulate('change', state.node.value = 'california')
    submit.simulate('click')
    expect(wrapper.state().city).to.equal('oakland')
    expect(wrapper.state().state).to.equal('california')
  })


    it.skip('should have a link to an API as a prop', () => {
      const url = "www.google.com"
      const wrapper = shallow(<App url={url}/>);
      expect(wrapper.find(url).at(1).props().url).to.equal("www.google.com");

    })

    it.skip('should have unordered list with nested list elements', () => {
      const wrapper = mount(<App />);
      const city = wrapper.find('#citytest');
      const state = wrapper.find('#statetest');
      const submit = wrapper.find('.location-button');
      city.simulate('change', city.node.value = 'oakland')
      state.simulate('change', state.node.value = 'california')
      submit.simulate('click')
      expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
    })

    it('should display its title in the header using props', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<h3 className="title">{wrapper.props.title}</h3>)).to.equal(true);

    })

    it('should have a summary with space for forecast info', () => {
      const wrapper = shallow(<Summary />);
expect(wrapper.equals(<section className="summary">
  <img src={wrapper.props.icon} className='icon' alt="weather icon"></img>
  <h1 className="locations">CITY: {wrapper.props.locations}</h1>
  <h1 className="date">DATE: {month},{wrapper.props.day},{wrapper.props.year}</h1>
  <h1 className='lines'>The probability of precipitation is {wrapper.props.chance}.</h1>
  <h1 className='lines'>The High Temperature will be {wrapper.props.high}.</h1>
    <h1 className='lines'>The Low Temperature will be {wrapper.props.low}.</h1>
    <h1 className='lines'>Day: {wrapper.props.summaryDay}</h1>
    <h1 className='lines'>Night: {wrapper.props.summaryNight}</h1>
  </section>)).to.equal(true);

    })

    it.skip('should throw a red alert when severe weather is forecasted'), ()=> {
      //set alert array to 1
    }



})
