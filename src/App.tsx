import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';

type ConceptType = { title: string; image: string; description: string };
const concepts: ConceptType[] = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

const App = () => {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt='Medal badge with a star' />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id='concepts'>
        {concepts.map((concept) => {
          return (
            <li className='concept'>
              <img src={concept.image} alt={concept.title} />
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
