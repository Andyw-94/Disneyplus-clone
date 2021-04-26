import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";
import { useEffect } from "react";


const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home")
      }
    });
  }, [userName])

  const handleAuth = () => {
    if (!userName) {
      auth.signInWithPopup(provider).then(result => {
        setUser(result.user);
      })
    } else if (userName) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        history.push("/");
      })
      .catch(err =>
        alert(err.message)
      );
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {
        !userName ? 
        <Login onClick={handleAuth}>Log in</Login>
         : 
        <>
        <NavMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <SignOut>
          <UserImg src={userPhoto} alt={userName} />
          <DropDown>
            <span onClick={handleAuth}>Sign out</span>
          </DropDown>
        </SignOut>
        </>
      } 
    </Nav>
  );
};

export default Header;


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 16px;
  height: 70px;
  padding: 0 36px;
  background-color: #090b13;
  z-index: 3;
`;

const Logo = styled.a`
  display: inline-block;
  max-height: 70px;
  width: 80px;
  font-size: 0;
  margin-top: 4px;
  padding: 0;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 750px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      position: relative;
      white-space: nowrap;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px;
      color: rgb(249, 249, 249);
  
      &:before {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        height: 2px;
        width: auto;
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        background-color: rgb(249,249,249);
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        opacity: 0;
      }
    }
  
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  
`;

const Login = styled.a`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  background-color: rgb(0, 0, 0, 0.6);
  transition: all 0.2s ease;

  &:hover {
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
    cursor: pointer;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  width: 100px;
  font-size: 14px;
  letter-spacing: 3px;
  padding: 10px;
  background-color: rgb( 19, 19, 19);
  box-shadow: rgb( 0 0 0 / 50%) 0 0 18px 0
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  opacity: 0;
`;


const SignOut = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  cursor: pointer;

  ${UserImg} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      transition-duration: 1s;
      opacity: 1;
    }
  }
`;
