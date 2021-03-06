import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const locationsData = useSelector(state => state.locations);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  console.log(locationsData);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
