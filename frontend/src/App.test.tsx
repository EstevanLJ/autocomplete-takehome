import React from 'react';
import {shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';
import App from './App';
import Autocomplete from './components/Autocomplete/Autocomplete';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  
  

  expect(linkElement).toBeInTheDocument();
});

test('renders Autocomplete component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(Autocomplete)).toEqual(true);
});
