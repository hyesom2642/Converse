// > styled-components
import styled from 'styled-components';

// > icons
import { BsArrowRight } from "react-icons/bs";

// > 
import { useState } from 'react';

// > data file
import data from './data.js';

function ShopByStyle(){
  const [shopbystyleData] = useState(data);

  return(
    <>
      <Container>
        <ShopByStyleTitle>
          <h1>Shop By Style</h1>
          <div className="new">
            <BsArrowRight />
            <a href="https://www.converse.co.kr/category/shoes/23/">신상품 보러 가기</a>
          </div>
        </ShopByStyleTitle>
        <ItemWrapper>
          {
            shopbystyleData.map( (item, i) => {
              return (
                <a href={item.href}>
                  <img src={item.img} alt={`style${[i]}-item`} />
                </a>
              )
            })
          }
          {/* <a href="/">
            <img src="img/style1.jpg" alt="style1-itme" />
          </a>
          <a href="/">
            <img src="img/style2.jpg" alt="style2-item" />
          </a>
          <a href="/">
            <img src="img/style3.jpg" alt="style3-item" />
          </a>
          <a href="/">
            <img src="img/style4.jpg" alt="style4-item" />
          </a> */}
        </ItemWrapper>
      </Container>
    </>
  )
}

export default ShopByStyle;

const Container = styled.div`
  width: 1440px;
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

    &:hover {
      opacity: 0.8;
    }
    
    a {
      display: block;
      margin-left: 5px;
      color: #000;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  a {
    width: 25%;

    img {
      display: block;
      width: 100%;
      transition: all 0.3s ease-in-out;
  
      &:hover {
        filter: brightness(70%)
      }
    }
  }
`;
