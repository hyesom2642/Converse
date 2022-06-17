// > styled-components 
import styled from 'styled-components';

// >
import { useState } from 'react';

// > product card component 
import CardForm from './CardForm';

// > data file
import data from './data.js';

function BestSeller(){
  const [bestProduct] = useState(data);
  // const [isMouseHover, setIsMouseHover] = useState(false, false, false, false);

  return(
    <>
      <Container>
        <BannerWrapper>
          <LeftContent>
            <img src="img/bestseller-banner.jpg" alt="bestseller-banner-images" />
            <ButtonWrapper>
              <h1>
                RUN STAR HIKE<br />
                NEW COLORS
              </h1>
              <p>
                런스타 하이크의 새로운 컬러를 지금 만나보세요.
              </p>
              <a href="https://www.converse.co.kr/category/elevation/185">더 알아보기</a>
          </ButtonWrapper>
          </LeftContent>
          <RightContent>
            {
              bestProduct.map((item, i) => {
                return(
                  <CardForm
                    bestProduct={bestProduct[i]}
                    i = {i}
                  />
                )
              })
            }
          </RightContent>
        </BannerWrapper>
      </Container>
    </>
  )
}
export default BestSeller;

const Container = styled.div`
  width: 1440px;
  height: 900px;
  margin-bottom: 50px;
`;

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  height: 100%;

`;
const RightContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28.797px;
  text-align: left;

  h1 {
    font-size: 50px;
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -0.01em;
    margin-bottom: 12px;
    color: #000;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: #000;
  }

  a {
    display: block;
    min-width: 180px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border: 1px solid #000;
    background-color: #000;
    padding: 15px 20px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;