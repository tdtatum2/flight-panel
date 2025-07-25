import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function InstructorShowcaseDesktop( {instructorGroup} ){
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const container = document.querySelector('.d-instructor-container');

      let timeoutId;

      const sendHeight = () => {
        if (container) {
          const height = container.scrollHeight; // Use scrollHeight for more accurate height
          console.log('Height sent to parent:', height); // Debugging
          window.parent.postMessage({ type: 'setHeight', height }, '*');
        }
      }

      const debouncedSendHeight = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          sendHeight();
        }, 200);
      }

      const resizeObserver = new ResizeObserver(() => {
        debouncedSendHeight();
      })

      if (container) {
        resizeObserver.observe(container);
      }

      return () => {
        clearTimeout(timeoutId);
        if (container) {
          resizeObserver.unobserve(container);
        }
      }    
  }, []);

    

    const activeInstructor = instructorGroup[activeIndex];

    return (
        <Container fluid className="d-instructor-container" style={{ minHeight: '90vh', height: '80vh', paddingBottom: '1rem' }}>
            <Row className="d-instructor-main-row" style={{ height: '100%' }}>
                <Col md={2} className='d-instructor-thumbnails' style={{ height: '100%' }}>
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
                <Col md={10} className="d-instructor-content-col" style={{ height: '100%' }}>
                    <div className="d-instructor-content-flex">
                      <div className="d-instructor-header-row">The Flight Club 316 Team</div>
                      <div className="d-instructor-info-panel">
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
                        <div className="d-instructor-image-panel">
                          <div
                            className='d-instructor-large-image'
                            style={{
                              backgroundImage: `url(${activeInstructor.cardImage2})`,}}
                          />
                        </div>
                      </div>
                      <div className="d-instructor-booking-row">
                        <Button
                          variant='dark'
                          className='d-booking-button'
                          target='_blank'
                          href={activeInstructor.bookingLink}
                          block='true'
                        >
                          Book with {activeInstructor.shortName}
                        </Button>
                      </div>
                    </div>
                </Col>
            </Row> 
        </Container>
    );
}

export default InstructorShowcaseDesktop;
