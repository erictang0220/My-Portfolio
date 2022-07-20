import React from "react";
import Card from "./Card"
import Carousel from "react-multi-carousel";
import Slide from "react-reveal";
import "react-multi-carousel/lib/styles.css";
import {isMobile} from 'react-device-detect';

import pic from "/Users/erictang/Desktop/portfolio web/src/img.jpg";
const response = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function FullCarousel(props) {
    var tmp;
    if (props.data === undefined) tmp = [];
    else tmp = props.data.pieces;
    const allArt = tmp.map((piece) => {
        return (
            <Card key={piece.name} info={piece}/>
        );
    });

    return (
        <section id="gallery">
          <Slide left duration={2000}>
                <h4
                    style={{
                        textAlign: "center",
                        font: "30px/24px opensans-bold, sans-serif",
                        paddingTop: "100px",
                        paddingBottom: "40px",
                        color: "#a1a1a1",
                        letterSpacing: "2.5px",
                        
                      }}
                > ART GALLERY
                </h4>
                
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    arrows={true}
                    renderArrowsWhenDisabled={true}
                    centerMode={true} // can't be used together with partialVisible
                    // partialVisible={true}
                    responsive={response}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={false}
                    // autoPlaySpeed={100000000}
                    keyBoardControl={false}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container-with-arrow"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    renderButtonGroupOutside={true}
                    renderDotsOutside={true}
                    // deviceType={isMobile}
                    dotListClass="custom-dot-list-style"
                    itemClass=""
                    customTransition="transform 1000ms ease-in-out"
                    slidesToSlide={3}
                    className="fixed"
                    >
                    
                    {allArt}
                    
                </Carousel>
              </Slide>
          
        </section>
    );
}