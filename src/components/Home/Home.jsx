import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from 'redux/operation';
import { selectExchange } from 'redux/selectors';
export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectExchange);
  const handleSubmit = evt => {
    evt.preventDefault();
    const [amount, from, , to] =
      evt.currentTarget.elements.current.value.split(' ');
    console.log(amount, from, to);
    dispatch(changeCurrency({ to, from, amount }));
    evt.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="current" />
        <button type="submit">Confirm</button>
      </form>

      <div>
        {items.map(item => (
          <p>
            {item.amount} {item.from} in {item.to} = {item.exchange}
          </p>
        ))}
      </div>
    </>
  );
};
