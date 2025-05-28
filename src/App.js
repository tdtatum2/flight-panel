import React, { useState, useEffect } from 'react';
import { Tab, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import InstructorShowcaseMobile from './components/InstructorShowcaseMobile';
import InstructorShowcaseDesktop from './components/InstructorShowcaseDesktop';

 const instructorsGroup = [
  {name: 'Noi Sourinthone', title:'The Showstopper', quote: 'Every point — a performance', bio:'Flashy, relentless, and impossible to ignore. Noi\'s deceptive slices and fearless speedsups capitvate crowds and opponents alike.', cardImage1: process.env.PUBLIC_URL + '/assets/Noi1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Noi2.png'},
  {name: 'Fin Tatum', title:'The Eclipse', quote: `Control what's seen. Decide what isn't.`, bio:'Fin bio', cardImage1: process.env.PUBLIC_URL + '/assets/Fin1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Fin2.png'},
  {name: 'Lock Sourinthone', title:'The Cannon', quote: 'The fuse is already lit.', bio:'Lock bio', cardImage1: process.env.PUBLIC_URL + '/assets/Lock1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Lock2.png'},
  {name: 'Jen Reifschneider', title:'The Assassin', quote: 'No defense againt the unseen.', bio:'Jen bio', cardImage1: process.env.PUBLIC_URL + '/assets/Jen1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Jen2.png'},
  {name: 'Matt Rochat', title:'The Solar Flare', quote: 'Dawn breaks. So do they.', bio:'Matt bio', cardImage1: process.env.PUBLIC_URL + '/assets/Matt1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Matt2.png'},
  {name: 'David Lopez', title:'The Tempest', quote: 'No calm before this storm.', bio:'David bio', cardImage1: process.env.PUBLIC_URL + '/assets/David1.png', cardImage2: process.env.PUBLIC_URL + '/assets/David2.png'},
];


 
function App() {
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
            <div className="mobile-layout">
              <InstructorShowcaseMobile instructorGroup={instructorsGroup}/>
            </div>
            <div className="desktop-layout">
              <InstructorShowcaseDesktop instructorGroup={instructorsGroup}/> 
            </div>
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
