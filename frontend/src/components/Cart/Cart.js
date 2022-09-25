import { useSelector } from "react-redux";
import { displayCart } from "../../features/slice/cartSlice";
import { toToggleCart } from "../../features/slice/toggleSlice";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const toggle = useSelector(toToggleCart);
  const { cartItem } = useSelector(displayCart);

  const cart = cartItem.map((item) => (
    <CartItem key={item.id} item={{ total: item.price, ...item }} />
  ));
  return (
    <>
      {toggle && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>{cart}</ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
