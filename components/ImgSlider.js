import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    }

    return (
        
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src="/images/slider-badging.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scale.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-badag.jpg" alt="" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scales.jpg" alt="" />
                    </a>
                </Wrap>
            </Carousel>
        
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin: 20px;

    @media (max-width: 750px) {
        height: 140px;
        
    }
    
    & > button {
        height: 100%;
        width: 5vw;
        opacity: 0;
        z-index: 1;

        &:hover {
            transition: opacity 0.2s ease 0s;
            opacity: 1;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -35px;

        @media (max-width: 750px) {
            left: -20px;
        }
    }

    .slick-next {
        right: -35px;

        @media (max-width: 750px) {
            right: -20px;
        }
    }
`;

const Wrap = styled.div`
    position: relative;
    border-radius: 4px;
    cursor: pointer;

    a {
        position: relative;
        display: block;
        padding: 4px;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, 
            rgb(0 0 0 / 73%) 0 16px 10px -10px;
        cursor: pointer;

        @media (max-width: 750px) {
            border-radius: 10px;
            box-shadow: none;
        }

        img {
            width: 100%;
            height: 100%;

            @media (max-width: 750px) {
                object-fit: cover;
                height: 150px;
                border-radius: 5px;
            }
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;

            @media (max-width: 750px) {
                border: none;
            }
        }
    }
    `
;