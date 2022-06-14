// > styled-components
import styled from 'styled-components';

function Banner3(){
  return(
    <>
      <Container>
        <BannerWrapper>
          <img src="img/banner5.jpg" alt="" />
          <div className="textWrapper">
            <h1>SUMMER WHITES</h1>
            <p>여름에는 시원한 화이트 컬러의 컨버스로 데일리룩을 완성해보세요</p>
            <button>더 알아보기</button>
          </div>
        </BannerWrapper>
      </Container>
    </>
  )
}

export default Banner3;

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

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 28.797px;

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
    button {
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