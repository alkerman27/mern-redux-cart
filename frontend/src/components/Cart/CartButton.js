import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayCart } from '../../features/slice/cartSlice';
import { toggleCart } from '../../features/slice/toggleSlice';
import classes from './CartButton.module.css';

const CartButton = ({ link }) => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(displayCart);
  const toggleHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <div className={classes['cart-button']}>
      {link === 'admin' && (
        <button onClick={toggleHandler} className={classes.button}>
          <span>My Cart</span>
          <span className={classes.badge}>{totalQuantity}</span>
        </button>
      )}
      <Link to={link}>
        <button className={classes.button}>
          {link === 'admin' ? <span>Admin</span> : <span>Home</span>}
        </button>
      </Link>
    </div>
  );
};

export default CartButton;
