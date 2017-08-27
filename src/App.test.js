import React from 'react';
import ReactDOM from 'react-dom';
import ListExample from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListExample />, div);
});
