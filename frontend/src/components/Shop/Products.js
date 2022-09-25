import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProduct,
  productError,
  productStatus,
  showAllProduct,
} from '../../features/slice/productSlice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = ({ title }) => {
  const dispatch = useDispatch();
  const effectRef = useRef(false);
  const product = useSelector(showAllProduct);
  const productsStatus = useSelector(productStatus);
  const productsError = useSelector(productError);

  useEffect(() => {
    if (effectRef.current === false) {
      if (productsStatus === 'idle') {
        dispatch(fetchProduct());
      }
      return () => {
        effectRef.current = true;
      };
    }
  }, [productsStatus, dispatch]);

  let content;
  if (productsStatus === 'loading') {
    content = <p>"loading..."</p>;
  } else if (productsStatus === 'succeded') {
    content = product.map((item) => (
      <ProductItem
        key={item._id}
        title={item.title}
        description={item.description}
        price={item.price}
        id={item._id}
      />
    ));
  } else if (productsStatus === 'failed') {
    content = <p>{productsError}</p>;
  }

  return (
    <section className={classes.products}>
      <h2>{title}</h2>
      <ul>{content}</ul>
    </section>
  );
};

export default Products;
