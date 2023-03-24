import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency } from 'redux/selectors';
import { latestCurrency } from 'redux/operation';
import { selectRates } from 'redux/selectors';

export const CurrencyRate = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const dispatch = useDispatch();
  const ratesCurrency = useSelector(selectRates);
  useEffect(() => {
    dispatch(latestCurrency(baseCurrency));
  }, [baseCurrency, dispatch]);
  return (
    <>
      <p>Ypu base currency : {baseCurrency}</p>
      <div>
        {ratesCurrency.map(item => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
};
