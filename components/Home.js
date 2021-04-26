import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection("movies").onSnapshot(snapshot => {
            snapshot.docs.map(doc => {
                console.log(recommends)
                switch(doc.data().type) {
                    case "recommend":
                        recommends = [...recommends, ({id: doc.id, ...doc.data()})]
                        break;

                    case "new":
                        newDisneys = [...newDisneys, ({id: doc.id, ...doc.data()})]    
                        break;

                    case "original":
                        originals = [...originals, ({id: doc.id, ...doc.data()})]
                        break;

                    case "trending":
                        trending = [...trending, ({id: doc.id, ...doc.data()})] 
                        break;
                }
            })
        

        dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
        }))
    })    
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

export default Home;

const Container = styled.main`
    position: relative;
    top: 72px;
    display: block;
    overflow-x: hidden;
    padding: 0 calc(3.5vw * 5px);
    min-height: calc(100vh - 250px);
    
    
    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: url("/images/home-background.png") center no-repeat fixed;
        opacity: 1;
        z-index: -1;
    }`;