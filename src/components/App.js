import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../actions';
import Loader from './Loader/Loader';
import Navbar from './Navbar/Navbar';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector(state => state.locations);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <Navbar />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
