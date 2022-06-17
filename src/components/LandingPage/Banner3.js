// > styled-components
import styled from 'styled-components';

function Banner2(){
  return(
    <>
      <Container>
        <BannerWrapper>
          <LeftContent>
            <img src="img/banner3.jpg" alt="" />
          </LeftContent>
          <RightContent>
            <div className="rightTop">
              <img src="img/banner3-1.jpg" alt="" />
              <img src="img/banner3-2.jpg" alt="" />
            </div>
            <div className="rightBottom">
              <div className="bannerInfo">
                <h1>
                  CONVERSE X<br />
                  A-COLD-WALL*
                </h1>
                <p>
                  컨버스와 어 콜드 월*이 다시 만나 혁신적인 CX 컴포트 테크놀로지와<br />
                  아방가르드한 디자인을 미래지향적으로 조합한<br />
                  새로운 실루엣의 뉴 스폰지 크레이터를 선보입니다.
                </p>
                <a href="https://www.converse.co.kr/limited/acwsponge.html">22.06.23 10AM 출시 예정</a>
              </div>
            </div>
          </RightContent>
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
      display: block;
      width: 50%;
      height: 100%;
    }
  }
  .rightBottom {
    position: relative;
    width: 100%;
    height: 50%;
    background-color: #000;

    .bannerInfo {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 27.375px;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    
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
        margin-bottom: 12px;
      }
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
`;