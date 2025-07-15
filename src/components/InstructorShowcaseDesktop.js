import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function InstructorShowcaseDesktop( {instructorGroup} ){
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const sendHeight = () => {
            const height = document.documentElement.scrollHeight;
            window.parent.postMessage({ type: 'setHeight', height }, '*');
        };    
    sendHeight();
    const interval = setInterval(sendHeight, 500);
    setTimeout(() => clearInterval(interval), 3000);
    }, []);

    const activeInstructor = instructorGroup[activeIndex];

    return (
        <Container fluid className="d-instructor-container">
            <Row>
                <Col md={2} className='d-instructor-thumbnails'>
                    {instructorGroup.map((instructor, idx) => (
                        <div
                            key={idx}
                            id={instructor.shortName}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                backgroundImage: `url(${instructor.cardImage2})`,
                                filter: activeIndex === idx ? 'none' : 'grayscale(100%)',
                                cursor: 'pointer',
                                marginBottom: '1rem',
                                border: activeIndex === idx ? '2px solid #fff' : '2px solid transparent',
                                borderRadius: '8px',
                                height: '125px',
                                backgroundSize: 'cover',
                                transition: 'filter 0.3s, border 0.3s'
                            }}
                            title={instructor.name}
                        />
                    ))}
                </Col>
                <Col md={5} className="d-instructor-info-panel">
          <div className="d-instructor-info-tray">
            <h3>{activeInstructor.name}</h3>
            <h5>{activeInstructor.title}</h5>
            <h6>
              <strong>
                <em>"{activeInstructor.quote}"</em>
              </strong>
            </h6>
            <p>{activeInstructor.bio}</p>
            <span>
              <strong>{activeInstructor.booking}</strong>
            </span>
          </div>
        </Col>
        {/* Large Image */}
        <Col md={5} className="d-instructor-image-panel">
          <div
            className="d-instructor-large-image"
            style={
                {backgroundImage: `url(${activeInstructor.cardImage2})`}
            }
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 2 }} className="d-instructor-booking-row">
          <Button
            variant="dark"
            className="d-booking-button"
            target="_blank"
            href={activeInstructor.bookingLink}
            block="true"
          >
            Book with {activeInstructor.shortName}
          </Button>
        </Col>
            </Row> 
        </Container>
    );
}

export default InstructorShowcaseDesktop;
