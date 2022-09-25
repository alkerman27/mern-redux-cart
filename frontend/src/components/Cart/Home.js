import React from 'react';
import Layout from '../Layout/Layout';
import Products from '../Shop/Products';
import Cart from './Cart';

const Home = () => {
  return (
    <Layout link="admin">
      <Cart />
      <Products title="Buy your favorite products" />
    </Layout>
  );
};

export default Home;
