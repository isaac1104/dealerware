import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';
import rootReducer from '../../reducers';

const store = createStore(
  rootReducer,
  {
    search: '',
  },
  applyMiddleware(thunk)
);

describe('SearchBar', () => {
  it('should contain MuiTextField', () => {
    const rendered = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const textField = rendered.container.querySelector('div');
    expect(textField.className).toContain('MuiTextField-root');
  });
});
