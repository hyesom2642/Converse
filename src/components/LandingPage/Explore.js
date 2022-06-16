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
        {/* <CategoryWrapper>
          <CategoryLeft>
            <ul>
              <li>
                <BsArrowRight className="icon" />
                <a href="/">
                  여성<br />
                  전체보기
                </a>
              </li>
              <li>
                <BsArrowRight className="icon" />
                <a href="/">
                  남성<br />
                  전체보기
                </a>
              </li>
              <li>
                <BsArrowRight className="icon" />
                <a href="/">
                  아동<br />
                  전체보기
                </a>
              </li>
            </ul>
          </CategoryLeft>
          <CategoryRight>
          <ul>
              <li>
                <BsArrowRight />
                <a href="/">
                  척 70
                </a>
              </li>
              <li>
                <BsArrowRight />
                <a href="/">
                  클래식 척
                </a>
              </li>
              <li>
                <BsArrowRight />
                <a href="/">
                  척 테일러 올스타
                </a>
              </li>
              <li>
                <BsArrowRight />
                <a href="/">
                  한정판
                </a>
              </li>
              <li>
                <BsArrowRight />
                <a href="/">
                  온라인 온리
                </a>
              </li>
              <li>
                <BsArrowRight />
                <a href="/">
                  빅 사이즈
                </a>
              </li>
            </ul>
          </CategoryRight>
        </CategoryWrapper> */}
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

const CategoryWrapper = styled.div`
  display: flex;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  height: 160px;
  margin-bottom: 50px;
`;
const CategoryLeft = styled.div`
  height: 160px;

  ul {
    height: 100%;
    display: flex;
    
    .icon {
      font-size: 24px;
      font-weight: bold;
    }
    
    li {
      width: 240px;
      height: 100%;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.1;
      padding: 30px 20px 30px 60px;
      border-right: 1px solid #000;

      a {
      }
    }
  }
`;
const CategoryRight = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    li {
      width: 240px;
      height: 80px;
      padding: 30px 20px 30px 60px;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
    }
  }
`;