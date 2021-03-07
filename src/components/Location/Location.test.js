import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import Location from './Location';
import rootReducer from '../../reducers';

const store = createStore(
  rootReducer,
  {
    locations: {
      isLoading: false,
      data: [],
      error: null,
    },
  },
  applyMiddleware(thunk)
);

describe('Location', () => {
  it('should contain className container', () => {
    const rendered = render(
      <Provider store={store}>
        <Location />
      </Provider>
    );
    const div = rendered.container.querySelector('div');
    expect(div.className).toBe('container');
  });
});
