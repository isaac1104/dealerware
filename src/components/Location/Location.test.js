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
  test('renders with locations props', () => {
    render(
      <Provider store={store}>
        <Location />
      </Provider>
    );
  });
});
