// > styled-components
import styled from 'styled-components';

// > Carousel
import Carousel from './Carousel';
import Menubar from './Menubar';

function Navbar(){
  return(
    <>
      <Wrapper>
        <Container>
          <Banner>
              <a href="/">
                <img src="img/kr.svg" alt="" />
                <span>KR | 한국어</span>
              </a>
              <Carousel />
          </Banner>
        </Container>
      </Wrapper>
      <Menubar />
    </>
  )
}

export default Navbar;

const Wrapper = styled.div`
  width: 100vw;
  height: 70px;
  overflow-x: hidden;
  background-color: #E5E5E5;
  `;

const Container = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`;
  
  const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    position: absolute;
    top: 20px;
    left: 0;
    display: flex;
    align-items: center;

    span {
      font-size: 10px;
      font-weight: bold;
      line-height: 12px;
      color: #000;
      padding: 0 3px;
    }

    img {
      display: block;
      width: 20px;
      height: 15px;
      margin-right: 5px;
    }
  }

`;