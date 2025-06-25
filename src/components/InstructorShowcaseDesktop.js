import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

function InstructorShowcaseDesktop( {instructorGroup} ){
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('right');


    const goNext = () => {
        setDirection('right');
        setActiveIndex((prev) => (prev + 1) % instructorGroup.length);
    };

    const goBack = () => {
        setDirection('left');
        setActiveIndex((prev) => (prev - 1 + instructorGroup.length) % instructorGroup.length);
    };

    useEffect(() => {
    const sendHeight = () => {
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({ type: 'setHeight', height }, '*');
    };

    sendHeight();

    const interval = setInterval(sendHeight, 500);

    setTimeout(() => clearInterval(interval), 3000);
    
    }, []);

    return (
        <Container fluid className="d-instructor-carousel-container">
            <div className="d-instructor-wrapper">
                {instructorGroup.map((instructor, idx) => {
                    let position = '';
                    const n = instructorGroup.length;
                    const leftIdx = (activeIndex - 1 + n) % n;
                    const rightIdx = (activeIndex + 1) % n;

                    if (idx === activeIndex) {
                        position = 'active';
                    } else if (idx === leftIdx) {
                        position = 'left';
                    } else if (idx === rightIdx) {
                        position = 'right';
                    } else if (
                        direction === 'right' && idx === (activeIndex + 2) % n
                    ) {
                        position = 'incoming-right';
                    } else if (
                        direction === 'left' && idx === (activeIndex - 2 + n) % n
                    ) {
                        position = 'incoming-left';
                    } else {
                        position = 'hidden';
                    }

                    return (
                    <div
                        key={idx}
                        className={`d-instructor-slide ${position}`}
                    >
                        <div
                        className={`d-carousel-scroll-item`}
                        style={{
                            '--default-bg': `url(${instructor.cardImage1})`,
                            '--active-bg': `url(${instructor.cardImage2})`
                        }}
                        />
                        <div className='d-instructor-info-tray'>
                        <h3>{instructor.name}</h3>
                        <h5>{instructor.title}</h5>
                        <h6><strong><em>"{instructor.quote}"</em></strong></h6>
                        <p>{instructor.bio}</p>
                        <span><strong>{instructor.booking}</strong></span>
                        <br />
                        <Button variant='dark' className='d-booking-button' target='_blank' href={instructor.bookingLink}>Book with {instructor.shortName}</Button>
                        </div>
                    </div>
                    );
                })}
            </div>


            <div className="d-nav-buttons">
                <Button variant='light' id='d-previousInstructor' onClick={goBack}>←</Button>
                <div className="d-instructor-indicators">
                {instructorGroup.map((_, idx) => (
                    <span
                    key={idx}
                    className={`d-instructor-indicator ${activeIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    />
                ))}
                </div>
                <Button variant='light' id='d-nextInstructor' onClick={goNext}>→</Button>
            </div>
        </Container>
    );
}

export default InstructorShowcaseDesktop;
