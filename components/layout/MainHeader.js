import Link from 'next/link';
import classes from './MainHeader.module.scss';

const MainHeader = () => {
  return (
    <header className={classes.container}>
      <div className={classes.container__logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.container__navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
