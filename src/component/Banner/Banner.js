import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Banner = () => {
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
                <img src="img/banner_1.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/banner_2.png" alt="" />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
