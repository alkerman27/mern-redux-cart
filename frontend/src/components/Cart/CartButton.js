import { useDispatch, useSelector } from "react-redux";
import { displayCart } from "../../features/slice/cartSlice";
import { toggleCart } from "../../features/slice/toggleSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(displayCart);
  const toggleHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
