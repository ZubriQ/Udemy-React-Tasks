import './App.css';
import Person from './components/Person';
import persons from './data/persons';

function App() {
  return (
    <div className="App">
      {persons.map((person) => {
        //const { id, firstName, lastName, email, img } = person;
        // return (
        //   <h4>
        //     <Person
        //       id={id}
        //       firstName={firstName}
        //       lastName={lastName}
        //       email={email}
        //       img={img}
        //     />
        //   </h4>
        // );
        return (
          <h4>
            {/* React needs 'key' prop to know which object to rerender */}
            <Person key={person.id} {...person} />
          </h4>
        );
      })}
    </div>
  );
}

export default App;
