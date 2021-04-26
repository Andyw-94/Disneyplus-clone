import styled from "styled-components"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";


const Trending = () => {
    const movies = useSelector(selectTrending)

    return (
        <Container>
        <h4>Trending</h4>
            <Content>
            {
                    movies && movies.map((movie, key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={"/detail/" + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Trending;

const Container = styled.div`
    padding: 0 26px 26px 26px;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    
    @media (max-width: 750px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 48.5%;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    @media (max-width: 750px) {
        box-shadow: none;
        border: none;
        border-radius: 5px;
    }

    img {
        object-fit: cover;
        position: absolute;
        display: block;
        inset: 0;
        width: 100%;
        height: 100%;
        transition: opacity 500ms ease-in-out 0s;
        opacity: 1;
        z-index: 1;
    }

    &:hover {
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
            rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);

        @media (max-width: 750px) {
            box-shadow: none;
            transform: scale(1.01)
        }
    }
`
