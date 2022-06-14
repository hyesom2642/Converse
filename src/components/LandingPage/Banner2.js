// > styled-components
import styled from 'styled-components';

function Banner2(){
  return(
    <>
      <Container>
        <BannerWrapper>
          <img src="img/banner3.jpg" alt="" />
          <img src="img/banner4.jpg" alt="" />
          <div className="buttonWrapper">
            <button>더 알아보기</button>
          </div>
        </BannerWrapper>
      </Container>
    </>
  )
}

export default Banner2;

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
    width: 50%;
    height: 100%;
  }

  .buttonWrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 28.797px;
  }
  button {
    display: block;
    min-width: 180px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border: 1px solid #fff;
    background-color: #000;
    padding: 15px 20px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
`;