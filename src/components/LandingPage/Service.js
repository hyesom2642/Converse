// > styled-components
import styled from 'styled-components';

// > icons
import { TbTruckDelivery } from "react-icons/tb";
import { FaExchangeAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";

function Service(){
  return(
    <>
      <Wrapper>
        <Container>
          <ServiceWrapper>
            <ul>
              <li>
                <TbTruckDelivery className="icon" />
                <h1>무료배송</h1>
                <p>5만원 이상 구매 시 무료배송</p>
              </li>
              <li>
                <FaExchangeAlt className="icon" />
                <h1>교환 / 반품 서비스</h1>
                <p>
                  사이즈를 잘못 선택하셨나요?<br />
                  교환/반품 서비스에 대해<br />
                  더 알아보세요.
                </p>
                <a href="/" class="link">
                  자세히 보기
                </a>
              </li>
              <li>
                <GiConverseShoe className="icon" />
                <h1>회원 전용 혜택</h1>
                <p>
                  신규 가입 축하 쿠폰, 드로우 응모 등<br />
                  지금 회원 가입 하시고<br />
                  더욱 특별한 혜택을 누려보세요.
                </p>
                <a href="/" class="link">
                  회원 가입 하기
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFacebookF className="icon-link" />
                </a>
                <a href="/">
                  <FaInstagram className="icon-link" />
                </a>
                <h1>Follow Us</h1>
                <p>
                  컨버스의 SNS 채널을 통해 <br />
                  신상품 정보 및 이벤트 등 새로운 소식을 확인하세요.
                </p>
              </li>
            </ul>
          </ServiceWrapper>
        </Container>
      </Wrapper>
    </>
  )
}
export default Service;

const Wrapper = styled.div`
  width: 100vw;
  height: 255px;
  margin-bottom: 60px;
  border: 1px solid #eee;
`;

const Container = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`;
  
const ServiceWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width; 100%;
    height: 100%;
    margin: 0 auto;

  li {
    width: 25%;
    height: 100%;
    text-align: center;
    padding: 40px 0;
    border-right: 1px solid #eee;

    &:last-child {
      border: none;
    }

    h1 {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      line-height: 1;
    }
    p {
      max-width: 200px;
      margin: 8px auto 0;
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: -0.025em;
      color: #757575;
    }

    a.link {
      display: inline-block;
      font-size: 12px;
      line-height: 1;
      letter-spacing: -0.025em;
      color: #000;
      margin-top: 24px;
      padding-bottom: 1px;
      border-bottom: 1px solid #000;
    }
    .icon {
      width: 54px;
      height: 36px;
    }
    .icon-link {
      font-size: 20px;
      margin: 0 10px;
      color: #000;
    }
  }
}
`;