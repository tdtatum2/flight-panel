import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';

function InstructorShowcaseMobile({ instructorGroup }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    const children = Array.from(container.children);
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex)
  };

  return (
    <Container fluid className="m-instructor-carousel-container" ref={containerRef} onScroll={handleScroll}>
      {instructorGroup.map((instructor, idx) => (
        <div
        key={idx}
        className={`m-carousel-scroll-item ${activeIndex === idx ? 'active' : ''}`}
        style={{'--default-bg': `url(${instructor.cardImage1})`, '--active-bg': `url(${instructor.cardImage2})`}}
        />
      ))}
    </Container>
      );
    };

export default InstructorShowcaseMobile;
