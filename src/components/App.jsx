import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrencyRate } from './CurrencyRate/CurrencyRate';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { selectBaseCurrency } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBaseCurrency } from 'redux/operation';
import { setBaseCurrency } from 'redux/currensySlice';

export const App = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    if (baseCurrency) {
      return;
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      dispatch(fetchBaseCurrency(crd));
    }

    function error() {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [baseCurrency, dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<CurrencyRate />} />
      </Route>
    </Routes>
  );
};
