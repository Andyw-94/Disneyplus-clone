import styled from "styled-components";

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true}>
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 25px;
    margin: 24px;
    padding: 30px 0 26px;

    @media (max-width: 750px) {
        gap: 10px;
        height: 100px;
    }
`;

const Wrap = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 55.7%;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;    

    @media (max-width: 750px) {
        height: 64px;
        background: linear-gradient(to bottom, #070B2F, #1155B1);
        border: 1px solid rgba(249, 249, 249, 0.1);
        box-shadow: none;
    }

    img {
        position: absolute;
        top: 0;
        object-fit: cover;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        inset: 0;
        transition: opacity 500ms ease-in-out 0s;
        opacity: 1;
        z-index: 1;

        @media (max-width: 750px) {
            top: 7.5px;
            height: 50px;
        }
    }

    video {
        position: absolute;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
            rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);    

        @media (max-width: 750px) {
            box-shadow: none;
            transform: scale(1.01);
        }

        video {
            opacity: 1;
        }
    }
    `