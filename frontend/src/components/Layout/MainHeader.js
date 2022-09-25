import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = ({ link }) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton link={link} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
