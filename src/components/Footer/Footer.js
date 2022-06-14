// > styled-components
import styled from 'styled-components';

function Footer(){
  return(
    <>
      <Wrapper>
        <Container>
          <LeftContent>
            <ul>
              <li>
                <a href="/">
                  (유)컨버스코리아
                </a>
              </li>
              <li>
                <span>대표 주형준</span>
              </li>
              <li>
                <span>개인정보책임 주형준</span>
              </li>
              <li>
                <span>사업자등록번호 220-88-74818</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>통신판매업 신고번호 제2016-서울강남-00478호</span>
              </li>
              <li>
                <a href="/">
                  통신판매업자 신원정보 확인
                </a>
              </li>
            </ul>
            <p>주소 서울특별시 강남구 테헤란로 152 (역삼동) 강남파이낸스센터 32층</p>
            <ul>
              <li>고객상담팀: 080-987-0182 (상담시간 월-금 : AM 09:00 - PM 05:30, 주말/공휴일 휴무)</li>
              <li>
                <a href="/">
                  conversekorea@converse.co.kr(24시간 접수 가능)
                </a>
              </li>
            </ul>
            <p className="copyright">2020 Converse Korea LLC. All Rights Reserved.</p>
          </LeftContent>
          <RightContent>
            <span>KG 이니시스 구매안전 서비스</span>
            <span>고객님은 안전거래를 위해 현금 등으로 결제시</span>
            <span>저희 쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수 있습니다. </span>
            <span>결제대금예치업 등록번호 02-006-00013</span>
            <a href="https://iniweb.inicis.com/popup/common/popup_escrow_notice.jsp?mid=ECAconv3cf">서비스 가입사실 확인</a>
          </RightContent>        
        </Container>
      </Wrapper>
    </>
  )
}
export default Footer;

const Wrapper = styled.div`
  width: 100vw;
  height: 202px;
  background-color: #000;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 40px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.025em;
  color: #9b9b9b;
`;

const LeftContent = styled.div`
  max-width: 705px;
  max-height: 122px;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li::after {
      content: '|';
      margin: 0 4px;
      position: relative;
      top: -1.8px;
    }
    li:last-child::after {
      content: '';
    }
    a {
      color: #fff;
    }
  }
  .copyright {
    margin-top: 22px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 400px;
  
  a {
    color: #fff;
  }
`;