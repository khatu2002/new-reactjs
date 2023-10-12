import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="Vpop slider.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="true-love.jpg" alt="Image 2" />
                </div>
                <div>
                    <img src="image3.jpg" alt="Image 3" />
                </div>
            </Slider>
        </div>
    );
};

const CustomPrevArrow = (props) => (
    <div
        {...props}
        className="custom-arrow custom-prev"
        onClick={props.onClick}
    ></div>
);

const CustomNextArrow = (props) => (
    <div
        {...props}
        className="custom-arrow custom-next"
        onClick={props.onClick}
    ></div>
);

export default SliderComponent;
