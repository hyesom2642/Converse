// > styled-components
import styled from 'styled-components';

function AColdWallBanner(){

  return(
    <>
      <Wrapper>
        <LeftContent />
        <RightContent>
          <RightImg />
          <Info>
            <div className="title">
              <h1>
                CONVERSE X <br />
                A-COLD-WALL*
              </h1>
            </div>
            <div className="content">
              <p>
                컨버스와 어 콜드 월*이 다시 만나 혁신적인 CX 컴포트 테크놀로지와<br />
                아방가르드한 디자인을 미래지향적으로 조합한<br />
                새로운 실루엣의 뉴 스폰지 크레이터를 선보입니다.
              </p>
            </div>
            <div className="button">
              <a href="https://www.converse.co.kr/product/list.html?cate_no=186">22.06.23 10AM 출시 예정</a>
            </div>
          </Info>
        </RightContent>
      </Wrapper>
    </>
  )
}
export default AColdWallBanner;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 1440px;
  height: 900px;
  margin: 0 auto;
  margin-bottom: 50px;

  @media screen and ${(props) => props.theme.mobile}{
    width: 100vw;
    height: auto;
    margin-bottom: 0;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  display: block;
  width: 50%;
  height: 100%;
  background-image: url("/img/banner/A-Cold-Wall-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;

  @media screen and ${(props) => props.theme.mobile}{
    width: 100%;
    height: auto;
    padding-bottom: 100%;
    background-image: url("/img/banner/A-Cold-Wall-4.jpg");
    background-size: 100%;
    background-position: top;
  }
`;

const RightImg = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  background-image: url("/img/banner/A-Cold-Wall-2.jpg"), url("/img/banner/A-Cold-Wall-3.jpg");
  background-size: 50%, 50%;
  background-repeat: no-repeat;
  background-position: 0, 100%;

  @media screen and ${(props) => props.theme.mobile}{
    display: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  width: 100%;
  height: 50%;
  padding: 4%;
  background-color: #000;

  .title {
    h1 {
        font-size: 50px;
        font-weight: bold;
        line-height: 1.25;
        letter-spacing: -0.01em;
        margin-bottom: 12px;
        color: #fff;
    }
  }
  .content {
    p {
      font-size: 16px;
      line-height: 1.4;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
      color: #fff;
    }
  }
  .button {
    a {
      display: block;
      min-width: 180px;
      font-size: 14px;
      font-weight: bold;
      border: 1px solid #fff;
      background-color: #fff;
      padding: 15px 20px;
      text-align: center;
      transition: all 0.3s ease-in-out;
      color: #000;
  
      &:hover {
        opacity: 0.6;
      }
    }
  }
  @media screen and ${(props) => props.theme.mobile}{
    width: 100%;
    height: 200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4%;

    .title {
      h1 {
        font-size: 26px !important;
        font-weight: bold;
        line-height: 21px;
        color: #000;
        margin-bottom: 20px;
        text-align: center;
      }
    }
    .content {
      p {
        font-size: 12px !important;
        color: #000;
        margin-bottom: 20px;
        text-align: center;
      }
    }
    .button {
      width: 100%;
      padding: 0 87px;
  
      a {
        display: block;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        border: 1px solid #000;
        border-radius: 50px;
        background-color: #000;
        padding: 12px 0;
        text-align: center;
        transition: all 0.3s ease-in-out;
        color: #fff;
    
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

const RightContent = styled.div`
  width: 50%;
  height: 100%;

  @media screen and ${(props) => props.theme.mobile}{
    width: 100%;
  }
`;