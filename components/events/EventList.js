import SingleEvent from './SingleEvent';

const EventList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <SingleEvent
          key={item.id}
          title={item.title}
          description={item.description}
          imagePath={item.image}
          time={item.date}
          adress={item.location}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
