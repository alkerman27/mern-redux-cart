import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slice/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = ({ title, price, description, id }) => {
  const dispatch = useDispatch(addToCart);

  const cartHandler = () => {
    dispatch(addToCart({ title, price, id }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
