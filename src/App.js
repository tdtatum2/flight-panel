import React, { useState, useEffect } from 'react';
import { Tab, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import InstructorShowcaseMobile from './components/InstructorShowcaseMobile';
import InstructorShowcaseDesktop from './components/InstructorShowcaseDesktop';

 const instructorsGroup = [
  {name: 'Noi Sourinthone', title:'The Showstopper', quote: 'Every point — a performance', bio:`Flashy, relentless, and impossible to ignore. Noi’s deceptive slices and fearless speedups captivate crowds and overwhelm opponents. His energy is infectious, his IQ undeniable, and his ability to read the court is matched only by his talent for working a room.`, booking: `Want a coach who brings both flash and function? Book the entertainer with elite-level bite.`, cardImage1: process.env.PUBLIC_URL + '/assets/Noi1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Noi2.png'},
  {name: 'Fin Tatum', title:'The Eclipse', quote: `Quiet as night. Dangerous as darkness.`, bio:'Fin plays the long game — calculating, steady, and always in control. With an elite two-handed backhand and a defensive mind built to outwit any oponent, he\'s a master of patience and precision. He teaches you how to slow the game, find your moments, and strike with intent.', booking: `For a strategist who turns the mental game into your greatest weapon, Fin is your guy.`, cardImage1: process.env.PUBLIC_URL + '/assets/Fin1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Fin2.png'},
  {name: 'Lock Sourinthone', title:'The Cannon', quote: 'The fuse is already lit.', bio:'Lock is all fire — raw power, fast hands, and zero hesitation. He delivers baseline drives that demand respect and teaches you how to flip defense into offense in a heartbeat. He\'s loud, he\'s fun, and he makes you fearless.', booking:`Looking to add explosiveness to your game? Lock in with Lock.`, cardImage1: process.env.PUBLIC_URL + '/assets/Lock1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Lock2.png'},
  {name: 'Jen Reifschneider', title:'The Assassin', quote: 'No defense againt the unseen.', bio:'Quiet, calculating, and ready for action. Jen\'s game is built on reading patterns, recognizing weakness, and striking with laser-sharp precision. Her game — and her coaching — reflect her prowess as a chef: measured, tasteful, and without waste.', booking:`For instruction that's sharp, balanced, and never overcooked, trust Jen.`, cardImage1: process.env.PUBLIC_URL + '/assets/Jen1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Jen2.png'},
  {name: 'Matt Rochat', title:'The Solar Flare', quote: 'Dawn breaks. So do they.', bio:'Matt is movement, fire, and finesse wrapped into one. Known for his nonstop energy, fearless ernes, and elite court coverage, his game reflects a confident balance of aggression and adaptability. He teaches hustle, resilience, and focus — all with a charming smile.', booking:`If you want a coach that combines power and positivity, step into the sun with Matt.`, cardImage1: process.env.PUBLIC_URL + '/assets/Matt1.png', cardImage2: process.env.PUBLIC_URL + '/assets/Matt2.png'},
  {name: 'David Lopez', title:'The Tempest', quote: 'No calm before this storm.', bio:'David brings speed, explosiveness, and raw talent to every court. His game is lightning-fast, unpredictable, and fueled by athletic instinct. As a coach, he passes on that aggression with drills that get you moving, reacting, and facing the storm head on.', booking:`Ready to unleash your inner storm? David will lead the way.`, cardImage1: process.env.PUBLIC_URL + '/assets/David1.png', cardImage2: process.env.PUBLIC_URL + '/assets/David2.png'},
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
