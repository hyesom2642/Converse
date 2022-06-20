import { useState } from 'react';
import styled, {css} from 'styled-components';

// icons 
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Detail(){
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle(!toggle);
  }
  return(
    <>
      <DetailWrapper>
        <ImgWrapper>
          <img src="img/product/런스타하이크블랙/detail-0.jpg" alt="" />
        </ImgWrapper>
        <ContentWrapper>
          <h2>런스타 하이크</h2>
          <p>러닝화와 척의 만남. 투톤 컬러의 러버솔이 매력적인 청키한 스타일의 플랫폼 스니커즈입니다. 아이코닉한 척테일러 올스타의 오리지널리티를 그대로 유지하면서도 혁신적이고 새로운 스타일을 제시합니다.</p>
          <p>* 캔버스 어퍼의 하이탑 스니커즈</p>
          <p>* 편안한 착화감을 제공하는 오솔라이트 인솔</p>
          <p>* 투톤 컬러의 러버 러기드 아웃솔</p>
          <p>* 아이코닉한 척테일러 패치</p>
        </ContentWrapper>
        <InfoWrapper>
          <img src="img/product/런스타하이크블랙/info.jpg" alt="" />
        </InfoWrapper>
        
        {
          toggle === true 
          ? 
            <>
              <div className="more" onClick={clickedToggle} toggle={toggle}>닫기 -</div>
              <ProductWrapper>
                <a href="">
                  <img src="img/product/런스타하이크블랙/info1.jpg" alt="" />
                </a>
                <img src="img/product/런스타하이크블랙/detail-1.jpg" alt="" />
              </ProductWrapper>
            </>
          : <div className="more" onClick={clickedToggle} toggle={toggle}>더보기 +</div>
        }
        <ReviewWrapper>
          <div className="top">
            <h1 className="top-title">REVIEW(121)</h1>
            <div className="arrow">
              <AiOutlineArrowLeft className="left" />
              <AiOutlineArrowRight className="right" />
            </div>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <h1>4.7</h1>
                <span>별갯수</span>
                <p>121개의 상품리뷰가 있습니다.</p>
                <button>리뷰쓰기</button>
              </li>
              <li>
                <img />
                <p>리뷰내용</p>
                <p></p>
              </li>
              <li>
                <img />
                <p>리뷰내용</p>
                <p></p>
              </li>
            </ul>
          </div>
        </ReviewWrapper>
      </DetailWrapper>
    </>
  )
}
export default Detail;

const DetailWrapper = styled.div`
  width: 100%;
  padding: 40px 68px 50px 68px;
  margin-top: 34px;

  .more {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    cursor: pointer;
    border-bottom: 1px solid #000;
  }
`;
  
const ImgWrapper = styled.div`
  border-top: 1px solid #eee;
  margin-bottom: 15px;

  img {
    display: block;
    width: 100%;
  }
`;
const ContentWrapper = styled.div`
  h2 {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const InfoWrapper = styled.div`
  margin-bottom: 15px;

  img {
    display: block;
  }
`;

const ProductWrapper = styled.div`
  margin-top: 15px;
`;

const ReviewWrapper = styled.div`
  padding: 24px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  .top {
    display: flex;
    justify-content: space-between;

    .top-title {
      font-size: 36px;
      font-weight: bold;
    }
    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: bold;
      cursor: pointer;

      .left {
        margin-right: 20px;
      }
    }
  }
  .bottom {
    margin: 32px 0;

    ul {
      max-width: 700px;
      height: 450px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
      border: 1px solid #eee;
    }
  }
`;