import { useEffect, useState } from 'react';
import { createModel } from 'hox';
import { IPage } from '../types/global';
import { store } from '../store';

function useHowler() {
  const [page, setPage] = useState(IPage.列表);

  return {
    page,
    setPage,
  };
}
export default createModel(useHowler);
