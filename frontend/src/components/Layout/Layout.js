import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader link={props.link} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
