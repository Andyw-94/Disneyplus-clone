import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>Get it all there</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;


const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vw;
  padding: 80px 40px;
  height: 100%;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  z-index: -1;
`;

const CTA = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2px auto;
  max-width: 650px;
  width: 100%;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const CTALogoOne = styled.img`
  display: block;
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
`;

const SignUp = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  padding: 16.5px 0;
  width: 100%;
  color: #f9f9f9;
  background-color: #0063e5;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  vertical-align: bottom;
`;