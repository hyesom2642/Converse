// > styled-components
import styled from 'styled-components';

function Banner6(){
  return(
    <>
      <Container>
        <BannerWrapper>
          <img src="img/banner8-1.jpg" alt="banner8-1 image" />
          <img src="img/banner8-2.jpg" alt="banner8-2 image" />
          <ButtonWrapper>
            <h1>
              SUMMER TEE <br />
            </h1>
            <p>
              여름에 가장 먼저 떠오르는 편안한 핏의 티셔츠로 데일리룩을 완성해 보세요
            </p>
            <button>더 알아보기</button>
          </ButtonWrapper>
        </BannerWrapper>
      </Container>
    </>
  )
}

export default Banner6;

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

const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
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
    color: #fff;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: #fff;
  }

  button {
    display: block;
    min-width: 180px;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    border: 1px solid #000;
    background-color: #fff;
    padding: 15px 20px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
`;