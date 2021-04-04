import React from 'react';
import { render } from '@testing-library/react';
import Location from './Location';
import Root from '../../Root';

describe('Location', () => {
  it('should contain className container', () => {
    const rendered = render(
      <Root>
        <Location />
      </Root>
    );
    const div = rendered.container.querySelector('div');
    expect(div.className).toBe('container');
  });
});
