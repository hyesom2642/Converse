// > styled-components
import styled from 'styled-components';

function Banner1(){
  return(
    <>
      <Container>
        <BannerWrapper>
          <img src="img/banner1.jpg" alt="" />
          <img src="img/banner1-1.jpg" alt="" />
          <div className="bannerInfo">
            <h1>CONVERSE X Stüssy</h1>
            <p>
              1990년대를 장악했던 블랙 헴프 척에서 영감을 받아,<br />
              스투시가 남부 캘리포니아 감성을 담은 독특한 원스타와 척 70를 선보입니다. 
            </p>
            <a href="https://www.converse.co.kr/limited/stussy.html">더 알아보기</a>
          </div>
        </BannerWrapper>
      </Container>
    </>
  )
}

export default Banner1;

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
  margin: 0 auto;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .bannerInfo {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    padding: 27.375px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    h1 {
      font-size: 50px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.01em;
      color: #fff;
      margin-bottom: 12px;
    }
    p {
      font-size: 16px;
      line-height: 1.4;
      letter-spacing: -0.02em;
      color: #fff;
      margin-bottom: 32px;
    }
    a {
      display: block;
      min-width: 180px;
      font-size: 14px;
      font-weight: bold;
      border: 1px solid #000;
      background-color: #000;
      padding: 15px 20px;
      text-align: center;
      transition: all 0.3s ease-in-out;
      color: #fff;
  
      &:hover {
        opacity: 0.6;
      }
    }
  }
`;