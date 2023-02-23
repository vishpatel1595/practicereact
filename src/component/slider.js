import React from "react";
// import { ContainerFluid } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../assets/images/img-1.jpg";
import Image2 from "../assets/images/img2.jpg";

function HeroSlider() {
    return (
        <div className="container-fluid p-0 h-100 ">
        <Carousel className="h-100">
            <Carousel.Item className="h-100 position-relative">
                <img
                    className="d-block w-100"
                    src={Image1}
                    alt="First slide"
                />
                <div className="hero-title">
                    <h1>Version 4</h1>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image1}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>);
}
export default HeroSlider;