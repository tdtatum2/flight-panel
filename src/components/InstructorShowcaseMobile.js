import React, { useState, useRef, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Pagination } from 'swiper/modules';
// SwiperCore.use([EffectCards, Pagination]);

function InstructorShowcaseMobile({ instructorGroup }) {
  return (
    <Container fluid className="m-instructor-carousel-container" style={{ transform: 'scale(0.8)'}}>
      <Swiper
        effect="cards"
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[EffectCards, Pagination]}
        className="m-instructor-swiper"
        >
        {instructorGroup.map((instructor, idx) => (
          <SwiperSlide key={idx}>
            <div className='m-instructor-slide'>
              <div
              className='m-carousel-scroll-item active'
              style={{'--default-bg': `url(${instructor.cardImage1})`, '--active-bg': `url(${instructor.cardImage2})`}}
              />
              <div className='m-instructor-info-tray'>
                <h3>{instructor.name}</h3>
                <h5>{instructor.title}</h5>
                <h6><strong><em>"{instructor.quote}"</em></strong></h6>
                <p>{instructor.bio}</p>
                <span><strong>{instructor.booking}</strong></span>
                <br></br>
                <Button variant='dark' className='m-booking-button' target='_blank' href={instructor.bookingLink}>Book with {instructor.shortName}</Button>
              </div>
            </div>
          </SwiperSlide>        
        ))}
      </Swiper>
    </Container>
      );
    };

export default InstructorShowcaseMobile;
