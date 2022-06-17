// > styled-components
import styled from 'styled-components';

// > 
import { useState } from 'react';

// > data file
import data from './data';

// > card form component
import CardForm from './CardForm';

function Banner5(){
  const [summerwhite] = useState(data);

  return(
    <>
      <Container>
        <BannerWrapper>
          <LeftContent>
            <img src="img/banner5.jpg" alt="" />
          </LeftContent>
          <RightContent>
            <div className="rightTop">
              {
                summerwhite.map( (item, i) => {
                  return(
                    <CardForm 
                      summerwhite={summerwhite[i]}
                      i={i}
                    />
                  )
                })
              }
            </div>
            <div className="rightBottom">
              <div className="bannerInfo">
                <h1>
                  SUMMER WHITES
                </h1>
                <p>
                  여름에는 시원한 화이트 컬러의 컨버스로 데일리룩을 완성해보세요
                </p>
                <a href="https://www.converse.co.kr/product/list.html?cate_no=186">더 알아보기</a>
              </div>
            </div>
          </RightContent>
        </BannerWrapper>
      </Container>
    </>
  )
}
export default Banner5;

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
`;

const LeftContent = styled.div`
  width: 50%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const RightContent = styled.div`
  width: 50%;
  height: 100%;

  .rightTop {
    display: flex;
    width: 100%;
    height: 50%;

    img {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .rightBottom {
    width: 100%;
    height: 100%;

    .bannerInfo {
      width: 100%;
      height: 50%;
      padding: 28.797px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    
    h1 {
        font-size: 50px;
        font-weight: bold;
        line-height: 1.25;
        letter-spacing: -0.01em;
        margin-bottom: 12px;
      }
      p {
        font-size: 16px;
        line-height: 1.4;
        letter-spacing: -0.02em;
        margin-bottom: 12px;
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
        }
  }
`;