import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';

function Home(props) {
  return (
    <div>
      <Head>
        <title>NextJS events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
}
export async function getStaticProps(context) {
  const events = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}
export default Home;
