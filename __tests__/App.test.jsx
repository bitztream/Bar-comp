import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

let sample = ['one', 'two', 'three'];

describe('<App />', () => {
  it('renders three <container> components', () => {
    const wrapper = shallow(<App array={sample}/>);
    console.log(wrapper);
    expect(wrapper.find('.container')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(3);
  });
});