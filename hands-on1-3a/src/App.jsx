import './App.css';
import Name from './components/Name/Name';
import Description from './components/Description/Description';
import Section from './components/Section_H2/Section_H2';


function App() {
  const userInformation = {
    firstname: 'Neil Raphael',
    lastname: 'Ramos',
    section: 'BSIT-3A',
    description: "I'm just a Beginner Programmer and I love drawing art. From BSIT-3A on Dr. Yanga College Inc."
  }
  return (
    <div className="App">
      <Name firstname={userInformation.firstname} lastname={userInformation.lastname}/>
      <Section section={userInformation.section}/>
      <Description description={userInformation.description}/>
    </div>
  );
}

export default App;
