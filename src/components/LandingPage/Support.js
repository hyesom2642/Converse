// > styled-components
import styled from 'styled-components';

// > icons 
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Support(){
  return(
    <>
      <Wrapper>
        <Container>
          <SupportWrapper>
            <ul className="listWrapper">
              <li className="listItem">
                <h1>FOLLOW US</h1>
                <div className="linkWrapper">
                  <a href="/">
                    <FaFacebookF className="icon-link" />
                  </a>
                  <a href="/">
                    <FaInstagram className="icon-link" />
                  </a>
                </div>
              </li>
              <li className="listItem">
                <h1>SUPPORT</h1>
                <ul>
                  <li>
                    <a href="/">
                      고객지원센터
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      1:1문의
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      주문/배송 조회
                    </a>
                  </li>
                </ul>
              </li>
              <li className="listItem">
                <h1>INFORMATION</h1>
                <ul>
                  <li>
                    <a href="/">
                      컨버스에 대하여
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      회원가입
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      매장안내
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      공지사항
                    </a>
                  </li>
                </ul>
              </li>
              <li className="listItem">
                <h1>POLICY</h1>
                <ul>
                  <li>
                    <a href="/">
                      이용약관
                    </a>
                  </li>
                  <li>
                    <a href="/" className="bold">
                      개인정보처리방침
                    </a>
                  </li>
                </ul>
              </li>
              <li className="listItem">
                <h1>FAMILY SITES</h1>
                <ul>
                  <li>
                    <a href="/">
                      NIKE
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Jordan
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </SupportWrapper>
        </Container>
      </Wrapper>
    </>
  )
}
export default Support;

const Wrapper = styled.div`
  width: 100vw;
  height: 185px;
  border: 1px solid #eee;
`;

const Container = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

const SupportWrapper = styled.div`
  width: 100%;
  height: 100%;

  ul.listWrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }

  li.listItem {
    width: 20%;
    height: 100%;
    padding: 30px 0 30px 40px;
    border-right: 1px solid #eee;

    &:last-child {
      border: none;
    }

    h1 {
      font-size: 14px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: -0.025em;
      margin-bottom: 15px;
    }
    a {
      display: block;
      font-size: 12px;
      line-height: 1;
      padding: 6px 0;
      color: #757575;

      &:hover {
        color: #000;
      }
    }
    .bold {
      font-weight: bold;
    }

    .linkWrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100px;
      height: 50px;
      border: 1px solid #eee;
      
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0;
      font-size: 14px;
      color: #000;
      border-right: 1px solid #eee;

      &:last-child {
        border: none;
      }
    }
  }
}
`;