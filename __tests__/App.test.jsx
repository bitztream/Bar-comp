import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';



describe('<App />', () => {
  it('renders something', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find('div')).toExist;
  });
});