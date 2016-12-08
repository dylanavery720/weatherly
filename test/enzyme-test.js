import React from 'react';
 
// import Idea from '../lib/Idea';
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

  it('should have LocationSearch & LocationButton components', () => {
    const wrapper = shallow(<App />)
    const LocationSearch= wrapper.find('LocationSearch')
    const LocationButton = wrapper.find('LocationButton')
    expect(LocationSearch).to.have.length(1)
    expect(LocationButton).to.have.length(1)
  })

  it.skip('should update state when I add an idea to the page', () => {
    const wrapper = mount(<App />);
    const title = wrapper.find('.CreateIdea-title');
    const body = wrapper.find('.CreateIdea-body');
    const submit = wrapper.find('.CreateIdea-submit');
    expect(wrapper.state().ideas.length).to.equal(0)
    title.simulate('change', title.node.value = 'testing title')
    body.simulate('change', body.node.value = 'testing body')
    submit.simulate('click')
    expect(wrapper.state().ideas.length).to.equal(1)
    expect(wrapper.state().ideas[0].title).to.equal('testing title')
    expect(wrapper.state().ideas[0].body).to.equal('testing body')
  })

  it.skip('the state should change if I delete an idea from the dom', () => {
    const wrapper = mount(<App />);
    const title = wrapper.find('.CreateIdea-title');
    const body = wrapper.find('.CreateIdea-body');
    const submit = wrapper.find('.CreateIdea-submit');
    title.simulate('change', title.node.value= 'testing title')
    body.simulate('change', body.node.value= 'testing body')
    submit.simulate('click');
    expect(wrapper.state().ideas.length).to.equal(1);
    let destroy = wrapper.find('button').at(1)
    destroy.simulate('click');
    expect(wrapper.state().ideas.length).to.equal(0);


  })
})
