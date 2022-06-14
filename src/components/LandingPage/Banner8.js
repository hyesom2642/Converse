// > styled-components
import styled from 'styled-components';

function Banner8(){
  return(
    <>
      <Container>
        <BannerWrapper>
          <img src="img/banner10.jpg" alt="" />
          <ButtonWrapper>
            <p>
              꾸준히 사랑받은 컨버스 베스트 상품들을 만나보세요.
            </p>
            <button>더 알아보기</button>
          </ButtonWrapper>
        </BannerWrapper>
      </Container>
    </>
  )
}
export default Banner8;

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
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 57.313px;
  text-align: left;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
    margin-top: 88px;
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