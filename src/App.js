import React from 'react';
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

 const instructorsGroup = [
  {name: 'Noi', age: '40', hand: 'Right', bio:'Noi bio'},
  {name: 'Fin', age: '25', hand: 'Left', bio:'Fin bio'},
  {name: 'Lock', age: '42', hand: 'Right', bio:'Lock bio'},
  {name: 'Jen', age: '30', hand: 'Left', bio:'Jen bio'},
  {name: 'Matt', age: '30', hand: 'Right', bio:'Matt bio'},
  {name: 'David', age: '21', hand: 'Right', bio:'David bio'},
  {name: 'Cody', age: '40', hand: 'Left', bio:'Cody bio'},
  {name: 'Nate', age: '35', hand: 'Right', bio:'Nate bio'}
];

function InstructorShowcaseMobile({ instructorGroup }) {
  return (
    <div className="m-instructors-showcase">
      {instructorsGroup.map((instructor) => (
        <div className="m-instructor-card">
          <Row>
            <Col>
              <h4 className="instructor-name">{instructor.name}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="instructor-age">{instructor.age}</p>
            </Col>
            <Col>
              <p className="instructor-hand">{instructor.hand}-Handed</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="instructor-bio">
                {instructor.bio}
              </p>
            </Col>
          </Row>
        </div>
      ))}
    </div>
    

      );
    }
 
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
            <div className="m-instructor-carousel-container">
              <InstructorShowcaseMobile
                instructorGroup={instructorsGroup}
              />
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
