import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination as Page } from '@material-ui/lab';
import { fetchLocations } from '../../actions';
import styles from './Pagination.module.css';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isLoading = useSelector(state => state.locations.isLoading);
  const dispatch = useDispatch();
  const { total, pageSize } = useSelector(state => state.locations);

  if (isLoading) return null;

  return (
    <Page
      showFirstButton
      showLastButton
      // count={Math.round(+total / +pageSize)}
      count={100}
      className={styles.pagination}
      page={currentPage}
      onChange={(_e, page) => {
        dispatch(fetchLocations({ page }));
        setCurrentPage(page);
      }}
    />
  );
};

export default Pagination;
