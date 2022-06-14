// > styled-components
import styled from 'styled-components';

function Banner5(){
  return(
    <>
      <Container>
        <BannerWrapper>
          <img src="img/banner7.jpg" alt="" />
          <ButtonWrapper>
            <h1>
              CONVERSE X <br />
              COMME <br />
              des GARÇONS
            </h1>
            <p>
              두 패션 아이콘의 콜라보레이션 <br />
              컨버스 X 꼼데가르송 컬렉션 재입고
            </p>
            <button>더 알아보기</button>
          </ButtonWrapper>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 56.234px;
  text-align: left;

  h1 {
    font-size: 50px;
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -0.01em;
    margin-top: 60px;
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