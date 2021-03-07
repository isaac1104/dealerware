import React from 'react';
import { render } from '@testing-library/react';
import LocationItem from './LocationItem';

describe('LocationItem', () => {
  it('should contain div with className container', () => {
    const rendered = render(
      <LocationItem data={{ name: 'Test', description: 'Test' }} />
    );
    const div = rendered.container.querySelector('div');
    expect(div.className).toBe('container');
  });
});
