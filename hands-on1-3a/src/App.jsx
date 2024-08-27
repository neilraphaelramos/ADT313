import './App.css';
import Header from './Section-Parts/Layout/Header/Header';
import About from './Section-Parts/Details/About';
import Footer from './Section-Parts/Layout/Footer/Footer';
import profilePic from './Section-Parts/Details/Images/2x2 profile.jpg';

function App() {
  const userInformation = {
    firstname: 'Neil Raphael',
    lastname: 'Ramos',
    section: 'BSIT-3A',
    description: "I'm 21 years old, just a Beginner Programmer and I love drawing art. I enjoy assisting in programming software.",
    imageSrc: profilePic
  }
  return (
    <div className="App">
      <Header />
      <About
        firstname={userInformation.firstname}
        lastname={userInformation.lastname}
        description={userInformation.description}
        imageSrc={userInformation.imageSrc}
        section={userInformation.section}
      />
      <Footer />
      {/*<Name firstname={userInformation.firstname} lastname={userInformation.lastname}/>
      <Section section={userInformation.section}/>
      <Description description={userInformation.description}/>*/}
    </div>
  );
}

export default App;
