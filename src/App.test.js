import { shallow,mount } from 'enzyme';
import React from 'react';
import App from './App'

it('check if the application renders correctly',()=>{

  const wrapper = mount(<App/>)

  expect(wrapper.text().includes('hello world')).toBe(true);

})