// > styled-components
import styled from 'styled-components';

// > icons
import { BsArrowRight } from "react-icons/bs";

// >
import { useState } from 'react';

// > data file
import data from './data.js';

function TrendingStyle(){
  const [trendData, setTrendData] = useState(data);

  return(
    <>
      <Container>
        <ShopByStyleTitle>
          <h1>Trending Styles</h1>
          <div className="new">
            <BsArrowRight />
            <a href="https://www.converse.co.kr/category/%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%85%80%EB%9F%AC/42//category/%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%85%80%EB%9F%AC/42//category/%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%85%80%EB%9F%AC/42/">베스트셀러 보기</a>
          </div>
        </ShopByStyleTitle>
        <ItemWrapper>
          {
            trendData.map((item, i) => {
              return(
                <TrendingCard trendData={trendData[i]}/>
              )
            })
          }
        </ItemWrapper>
      </Container>
    </>
  )
}
export default TrendingStyle;

function TrendingCard({trendData}){
  return(
    <>
      <a href="/" clasName="img-wrapper">
        <img src={trendData.img} alt="trending-style3" />
        <span>{trendData.name}</span>
      </a>
    </>
  )
}

const Container = styled.div`
  width: 1440px;
  margin-bottom: 50px;
`;

const ShopByStyleTitle = styled.div`
  display: block;
  width: 100%;
  height: 92px;
  padding: 0 28.797px;
  margin: 0 auto 20px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    line-height: 1.25;
    margin-bottom: 12px;
  }

  .new {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      opacity: 0.8;
    }

    a {
      display: block;
      margin-left: 5px;
      color: #000;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
 
  a {
    position: relative;
   
    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
 
      &:hover {
        filter: brightness(70%);
      }
    }
    span {
      position: absolute;
      left: 30px;
      bottom: 15px;
      color: #fff;
    }
  }
`;