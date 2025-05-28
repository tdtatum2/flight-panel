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

  const instructor = instructorGroup[activeIndex];


  // const handleScroll = () => {
  //   const container = containerRef.current;
  //   const children = Array.from(container.children);
  //   const containerCenter = container.scrollLeft + container.offsetWidth / 2;

  //   let closestIndex = 0;
  //   let closestDistance = Infinity;

  //   children.forEach((child, index) => {
  //     const childCenter = child.offsetLeft + child.offsetWidth / 2;
  //     const distance = Math.abs(containerCenter - childCenter);
  //     if (distance < closestDistance) {
  //       closestDistance = distance;
  //       closestIndex = index;
  //     }
  //   });

  //   setActiveIndex(closestIndex)
  // };

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
                <h6>{instructor.quote}</h6>
                <p>{instructor.bio}</p>
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
