import React, { useState, useRef, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';

function InstructorShowcaseMobile({ instructorGroup }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % instructorGroup.length);
  };

  const goBack = () => {
    setActiveIndex((prev) => (prev - 1 + instructorGroup.length) % instructorGroup.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goBack,
    trackMouse: true
  });

  return (
    <Container fluid className="m-instructor-carousel-container" {...swipeHandlers}>
      <div className="m-instructor-wrapper">
        {instructorGroup.map((instructor, idx) => (
          idx === activeIndex && (
            <div key={idx} className='m-instructor-slide'>
              <div
              className={`m-carousel-scroll-item ${activeIndex === idx ? 'active' : ''}`}
              style={{'--default-bg': `url(${instructor.cardImage1})`, '--active-bg': `url(${instructor.cardImage2})`}}
              />
              <div className='m-instructor-info-tray'>
                <h3>{instructor.name}</h3>
                <h5>{instructor.title}</h5>
                <h6><strong><em>{instructor.quote}</em></strong></h6>
                <p>{instructor.bio}</p>
                <span><strong>{instructor.booking}</strong></span>
                <br></br>
                <Button variant='dark' className='m-booking-button' target='_blank' href={instructor.bookingLink}>Book with {instructor.shortName}</Button>
              </div>
            </div>
        )
        
        ))}
      </div>
      <div className="m-nav-buttons">
        <Button variant='light' onClick={goBack}>←</Button>
        <Button variant='light' onClick={goNext}>→</Button>
      </div>
    </Container>
      );
    };

export default InstructorShowcaseMobile;
