import { getAllEvents } from '../../helpers/api-util';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import classes from './index.module.scss';

function EventsPage(props) {
  const { allEvents } = props;
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div className={classes.content}>
      <Head>
        <title>All events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const events = await getAllEvents();
  return {
    props: {
      allEvents: events,
    },
    revalidate: 60,
  };
}
export default EventsPage;
