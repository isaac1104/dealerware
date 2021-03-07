import React from 'react';
import { render } from '@testing-library/react';
import LocationItem from './LocationItem';

describe('Location', () => {
  test('renders with data props', () => {
    render(<LocationItem data={{ name: 'Test', description: 'Test' }} />);
  });
});
