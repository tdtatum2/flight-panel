import React, { useState, useEffect } from 'react';
import { Tab, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import InstructorShowcaseMobile from './components/InstructorShowcaseMobile';
import InstructorShowcaseDesktop from './components/InstructorShowcaseDesktop';

 const instructorsGroup = [
  {name: 'Noi', age: '40', hand: 'Right', bio:'Noi bio', cardImage1: process.env.PUBLIC_URL + '/assets/Noi1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Noi2.png'},
  {name: 'Fin', age: '25', hand: 'Left', bio:'Fin bio', cardImage1: process.env.PUBLIC_URL + '/assets/Fin1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Fin2.png'},
  {name: 'Lock', age: '42', hand: 'Right', bio:'Lock bio', cardImage1: process.env.PUBLIC_URL + '/assets/Lock1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Lock2.png'},
  {name: 'Jen', age: '30', hand: 'Left', bio:'Jen bio', cardImage1: process.env.PUBLIC_URL + '/assets/Jen1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Jen2.png'},
  {name: 'Matt', age: '30', hand: 'Right', bio:'Matt bio', cardImage1: process.env.PUBLIC_URL + '/assets/Matt1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Matt2.png'},
  {name: 'David', age: '21', hand: 'Right', bio:'David bio', cardImage1: process.env.PUBLIC_URL + '/assets/David1.png', cardImage2: process.env.PUBLIC_URL + '/assets/David2.png'},
];


 
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container fluid className="p-0">
      <Tab.Container defaultActiveKey="instructors" className="tab-container-whole">
        <Nav variant="tabs" className="d-flex justify-content-between">
          <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="instructors">Instructors</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="leagues">Leagues</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="programs">Programs</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="p-4">
          <Tab.Pane eventKey="instructors">
            <h3 className='m-tab-content-heading'>Meet Our Elite Team of Pickleball Pros</h3>
            { isMobile ? <InstructorShowcaseMobile
              instructorGroup={instructorsGroup}
            /> : <InstructorShowcaseDesktop
              instructorGroup={instructorsGroup} /> }
          </Tab.Pane>
          <Tab.Pane eventKey="leagues">
            <h3>Leagues</h3>
            <p>Content for Leagues</p>
          </Tab.Pane>
          <Tab.Pane eventKey="programs">
            <h3>Programs</h3>
            <p>Content for Programs</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
    
  );
}

export default App;
