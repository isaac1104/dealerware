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
  test('renders with search props', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });
});
