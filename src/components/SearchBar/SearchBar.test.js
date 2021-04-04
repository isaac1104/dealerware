import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';
import Root from '../../Root';

describe('SearchBar', () => {
  it('should contain MuiTextField', () => {
    const rendered = render(
      <Root>
        <SearchBar />
      </Root>
    );
    const textField = rendered.container.querySelector('div');
    expect(textField.className).toContain('MuiTextField-root');
  });
});
