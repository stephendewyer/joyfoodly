import React, { Component, useState } from 'react';
import classes from './slide_carousel.module.css';
import Image from 'next/image';
import blue_right_arrow from '../public/images/arrows/arrow_left.png';
import yellow_right_arrow from '../public/images/arrows/arrow_left_yellow.png';
import blue_left_arrow from '../public/images/arrows/arrow_right.png';
import yellow_left_arrow from '../public/images/arrows/arrow_right_yellow.png';
import slide_01 from '../public/images/slideshow/slide_image_01.jpg';
import slide_02 from '../public/images/slideshow/slide_image_02.jpg';
import slide_03 from '../public/images/slideshow/slide_image_03.jpg';
import slide_04 from '../public/images/slideshow/slide_image_04.jpg';
import slide_05 from '../public/images/slideshow/slide_image_05.jpg';
import slide_06 from '../public/images/slideshow/slide_image_06.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
      <div 
          
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <Image src={yellow_left_arrow} alt="yellow left arrow" /> 
          ) : (
          <Image src={blue_left_arrow} alt="blue left arrow" />
        )}    
    </div>
  );
};

const PrevArrow = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
      <div 
          
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <Image src={yellow_right_arrow} alt="yellow right arrow" /> 
          ) : (
          <Image src={blue_right_arrow} alt="blue right arrow" />
        )}    
    </div>
  );
};

export default class JoyfoodlySlideCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={classes.slide_carousel}>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <Image src={slide_01} alt="Joyfoodly slide 1" />
          </div>
          <div key={2}>
            <Image src={slide_02} alt="Joyfoodly slide 2" />
          </div>
          <div key={3}>
            <Image src={slide_03} alt="Joyfoodly slide 3" />
          </div>
          <div key={4}>
            <Image src={slide_04} alt="Joyfoodly slide 4" />
          </div>
          <div key={5}>
            <Image src={slide_05} alt="Joyfoodly slide 5" />
          </div>
          <div key={6}>
            <Image src={slide_06} alt="Joyfoodly slide 6" />
          </div>
        </Slider>
        <div className={classes.arrows}>
          <div className={classes.prev_arrow} onClick={this.previous}>
            <PrevArrow />
          </div>
          <div className={classes.next_arrow} onClick={this.next}>
            <NextArrow />
          </div>
        </div>
      </div>
    );
  }
}