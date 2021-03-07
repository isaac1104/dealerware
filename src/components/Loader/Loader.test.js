import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('should contain a progress bar', () => {
    render(<Loader />);
    const MuiCircularProgress = screen.getByRole('progressbar');
    expect(MuiCircularProgress).toBeDefined();
  });
});
