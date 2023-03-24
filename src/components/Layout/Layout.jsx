import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/rates">CurrencyRate</NavLink>
      <Outlet />
    </>
  );
};
