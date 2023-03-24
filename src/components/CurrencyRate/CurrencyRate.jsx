import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency } from 'redux/selectors';
import { latestCurrency } from 'redux/operation';

export const CurrencyRate = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(latestCurrency(baseCurrency));
  }, [baseCurrency, dispatch]);
  return (
    <>
      <p>Ypu base currency : {baseCurrency}</p>
    </>
  );
};
