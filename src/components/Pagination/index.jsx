import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { paginationActions } from '../../utils/actions';
import Button from '../ui/Button';
import Text from '../ui/Text';
import PaginationContainer from './styles';

function Pagination({ page, limitOfPage, dispatchPage }) {
  const handleAddPage = () => {
    dispatchPage({ type: paginationActions.add });
  };
  const handleSubPage = () => {
    dispatchPage({ type: paginationActions.sub });
  };
  const handleSetPage = (pageToSet) => {
    dispatchPage({ type: paginationActions.set, payload: pageToSet });
  };

  useEffect(() => {
    if (page > limitOfPage) {
      handleSetPage(1);
    }
  }, [page, limitOfPage]);

  return (
    <PaginationContainer size="sm">
      <Button disabled={page === 1} size="sm" onClick={handleSubPage}>
        Anterior
      </Button>
      <Text>
        {page}/{limitOfPage}
      </Text>
      <Button disabled={page === limitOfPage} onClick={handleAddPage} size="sm">
        Siguiente
      </Button>
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  limitOfPage: PropTypes.number,
  page: PropTypes.number,
  dispatchPage: PropTypes.func,
};

export default Pagination;
