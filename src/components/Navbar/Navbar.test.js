import React from 'react';
import Navbar from './Navbar';
import { render } from '@testing-library/react';

describe('Navbar', () => {
  it('should contain className navbar', () => {
    const rendered = render(<Navbar />);
    const div = rendered.container.querySelector('div');
    expect(div.className).toContain('navbar');
  });
});
