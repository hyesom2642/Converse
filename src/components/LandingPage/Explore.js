// > styled-components
import styled from 'styled-components';

// > icons
import { BsArrowRight } from "react-icons/bs";

function Explore(){
  return(
    <>
      <Container>
        <Title>
          <h1>Explore Converse</h1>
        </Title>
        <ContentWrapper>
          <LeftContent>
            <ul>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/category/shoes/23/?keyword=&search_form%5Boption_data%5D%5B%5D=custom_1%3D%EC%97%AC%EC%84%B1&cate_no=">여성<br/>전체보기</a>
              </li>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/category/shoes/23/?keyword=&search_form%5Boption_data%5D%5B%5D=custom_1%3D%EB%82%A8%EC%84%B1&cate_no=">남성<br/>전체보기</a>
              </li>
              <li>
              <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/category/kids-shoes/25/">아동<br/>전체보기</a>
              </li>
            </ul>
          </LeftContent>
          <RightContent>
            <ul>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/category/%EC%B2%99-70/44/">척 70</a>
              </li>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/category/%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%B2%99/58/">클래식 척</a>
              </li>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/category/%EC%B2%99%ED%85%8C%EC%9D%BC%EB%9F%AC-%EC%98%AC%EC%8A%A4%ED%83%80/43/">척테일러 올스타</a>
              </li>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/product/launchcalendar.html?cate_no=49">한정판</a>
              </li>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/product/list.html?cate_no=56">온라인 온리</a>
              </li>
              <li>
                <BsArrowRight className="arrow-icon" />
                <a href="https://www.converse.co.kr/category/shoes/23/?keyword=&search_form%5Boption_data%5D%5B%5D=size%253D295&search_form%5Boption_data%5D%5B%5D=size%253D300&cate_no=">빅 사이즈</a>
              </li>
            </ul>
          </RightContent>
        </ContentWrapper>
      </Container>
    </>
  )
}
export default Explore;

const Container = styled.div`
  width: 1440px;
  height: 230px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  display: block;
  width: 100%;
  padding: 0 28.797px;
  margin: 0 auto 20px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 36px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 157px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  li:hover {
    opacity: 0.8;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const LeftContent = styled.div`
  min-width: 50%;
  height: 100%;

  ul {
    display: flex;
    justify-content: center;
    height: 100%;

    li {
      position: relative;
      display: flex;
      width: 33.3%;
      height: 100%;
      border-left: 1px solid #000;
      padding: 30px 20px 30px 60px;

      .arrow-icon {
        position: absolute;
        left: 30px;
        top: 30px;
        font-size: 24px;
        font-weight: bold;
      }

      &:first-child {
        border: 0;
      }

      a {
        display: block;
        height: 100%;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.1;
        color: #000;
      }
    }
  }
`;

const RightContent = styled.div`
  height: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;

    li {
      position: relative;
      width: 33.3%;
      height: 50%;
      padding: 30px 20px 30px 60px;
      border-left: 1px solid #000;

      &:nth-child(-n+3) {
        border-bottom: 1px solid #000;
      }

      .arrow-icon {
        position: absolute;
        left: 30px;
        top: 30px;
        font-size: 18px;
        font-weight: bold;
      }

      a {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.1;
        color: #000;
      }
    }
  }
`;