import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('renders Loader component', () => {
    render(<Loader />);
  });
});
