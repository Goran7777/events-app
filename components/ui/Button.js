import Link from 'next/link';
import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <div>
      {props.link ? (
        <Link href={props.link}>
          <a className={classes.btn}>{props.children}</a>
        </Link>
      ) : (
        <button className={classes.btn} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </div>
  );
};

export default Button;
