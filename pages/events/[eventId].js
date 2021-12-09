import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import classes from './EventId.module.scss';

function EventDetailPage(props) {
  const event = props.selectedEvent;
  if (!event) {
    return (
      <div className={classes.container}>
        <p>No event found for chosen filter.</p>
        <Button link="/events">Go Back</Button>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <h1>{event.title}</h1>
      <Image
        src={`/${event.image}`}
        alt={event.title}
        width={400}
        height={200}
      />

      <p>{event.description}</p>
    </div>
  );
}
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}
export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
}
export default EventDetailPage;
