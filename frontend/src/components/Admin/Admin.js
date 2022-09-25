import React from 'react';
import Layout from '../Layout/Layout';
import Products from '../Shop/Products';

const Admin = () => {
  return (
    <div>
      <Layout link="/">
        <Products title="Edit Products" />
      </Layout>
    </div>
  );
};

export default Admin;
