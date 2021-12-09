import { useRouter } from 'next/router';
import Head from 'next/head';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import Button from '../../components/ui/Button';
import classes from './Slug.module.scss';

export default function FilteredEvents(props) {
  const router = useRouter();
  // const filterData = params.slug;
  // console.log(filterData);
  // if (!filterData) {
  //   return <p className="center">Loading ...</p>;
  // }
  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];
  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;
  const pageHeadData = (
    <Head>
      <title>Filtered events</title>
      <meta
        name="description"
        content={`All events for ${props.date.month}/${props.date.year}`}
      />
    </Head>
  );
  if (props.hasError) {
    return (
      <div className={classes.container}>
        {pageHeadData}
        <p>Invalid filter params.Please adjust your values!</p>
        <Button link="/events">Go Back</Button>
      </div>
    );
  }
  const filteredEvents = props.events;
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className={classes.container}>
        {pageHeadData}
        <p>No event found for chosen filter.</p>
        <Button link="/events">Go Back</Button>
      </div>
    );
  }
  return (
    <div>
      {pageHeadData}
      <EventList items={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: '/404'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
