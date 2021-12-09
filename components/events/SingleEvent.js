import Image from 'next/image';
import Button from '../ui/Button';
import Icon from '../../public/images/bell-svgrepo-com.svg';
import classes from './SingleEvent.module.scss';
const SingleEvent = (props) => {
  const readableDate = new Date(props.time).toLocaleDateString('sr-RS', {
    day: 'numeric',
    month: 'short',
    year: '2-digit',
  });
  const exploreLink = `/events/${props.id}`;
  return (
    <li className={classes.item}>
      <Image
        src={`/${props.imagePath}`}
        alt={props.title}
        width={400}
        height={200}
      />
      <div className={classes.container}>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <time>
            {readableDate}
            <Icon />
          </time>
        </div>
        <div>
          <p>{props.adress}</p>
        </div>
        <div>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default SingleEvent;
