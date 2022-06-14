// > styled-components
import styled from 'styled-components';

// > icons
import { BsArrowRight } from "react-icons/bs";

function TrendingStyle(){
  return(
    <>
      <Container>
        <ShopByStyleTitle>
          <h1>Trending Styles</h1>
          <div className="new">
            <BsArrowRight />
            <a href="/">베스트셀러 보기</a>
          </div>
        </ShopByStyleTitle>
        <ItemWrapper>
          <a href="/">
            <img src="img/trending-style0.jpg" alt="trending-style0" />
            {/* <span>시즈널 컬러</span> */}
          </a>
          <a href="/">
            <img src="img/trending-style1.jpg" alt="trending-style1" />
            {/* <span>온라인 온리</span> */}
          </a>
          <a href="/">
            <img src="img/trending-style2.jpg" alt="trending-style2" />
            {/* <span>런스타</span> */}
          </a>
          <a href="/">
            <img src="img/trending-style3.jpg" alt="trending-style3" />
            {/* <span>런스타 모션</span> */}
          </a>
        </ItemWrapper>
      </Container>
    </>
  )
}
export default TrendingStyle;

const Container = styled.div`
  width: 1440px;
  margin-bottom: 50px;
`;

const ShopByStyleTitle = styled.div`
  display: block;
  width: 100%;
  height: 92px;
  padding: 0 28.797px;
  margin: 0 auto 20px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    line-height: 1.25;
    margin-bottom: 12px;
  }

  .new {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    
    a {
      display: block;
      margin-left: 5px;
      color: #000;
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  
  a {
    
    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
  
      &:hover {
        filter: brightness(70%);
      }
    }
  }
`;
