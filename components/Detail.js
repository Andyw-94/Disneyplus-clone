import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../firebase";

const Detail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then(doc => {
            if (doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log("No such document in firebase");
            }
        })
    }, [id])


    return (
        <Container>
            <Background>
                <img 
                    src={detailData.backgroundImg}
                    alt={detailData.title} 
                />
            </Background>

            <ImageTitle>
                <img 
                    src={detailData.titleImg} 
                    alt={detailData.title}
                />
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    {detailData.subTitle}
                </SubTitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    position: relative;
    top: 0;
    display: block;
    padding: 0 calc(3.5vw * 5px)
    min-height: calc(100vh-250px);
    overflow-x: hidden;

    @media (max-width: 750px) {
        top: 315px;
    }
`;

const Background = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    left: 0;
    opacity: 0.8;
    z-index: -1;

    @media (max-width: 750px) {
        position: fixed;
        height: 100vh;
        background: url("/images/home-background.png") center no-repeat fixed;
    }

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 750px) {
            object-fit: contain;
            height: 400px;
        }
    }
`;

const ImageTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 30vw;
    min-height: 170px;
    width: 100%;
    margin: 0 auto;
    padding: 24px;
    -webkit-box-pack: start;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 850px;
`;

const Controls = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    min-height: 56px;
    margin: 24px;
`;

const Player = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    font-size: 15px;

    margin: 0 22px 0 0;
    padding: 0 24px;
    height: 56px;
    border: none;
    border-radius: 4px;
    background: rgb(249, 249, 249);
    color: #000;
    cursor: pointer;

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 750px) {
        font-size: 12px;
        height: 45px;
        margin: 0 10px 0 0;
        padding: 0 12px;
    }
`;

const Trailer = styled(Player)`
    border: 1px solid rgb(249, 249, 249);
    background: rgba(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
`;

const AddList = styled.div`
    display: flex;
    justify_content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    margin-right: 16px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        display: inline-block;
        background-color: rgb(249, 249, 249);

        &:first-child {
            width: 16px;
            height: 2px;
            transform: translate(12px, 0) rotate(0deg);
        }

        &:nth-child(2) {
            width: 2px;
            height: 16px;
            transform: translateX(3px) rotate(0deg);
        }
    }
`;

const GroupWatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: white;
    cursor: pointer;

    div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #000;
    }

    img {
        width: 100%;
    }
`;

const SubTitle = styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-left: 24px;
    color: rgb(249, 249, 249);

    @media (max-width: 750px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    font-size: 20px;
    line-height: 1.4;
    margin-left: 24px;
    padding: 16px 0;
    color: rb(249, 249, 249);

    @media (max-width: 750px) {
        font-size: 14px;
    }
`


