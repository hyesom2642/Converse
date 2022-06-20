// > css 
import styled from 'styled-components';

import data from './data.js';

import { BsSuitHeart } from "react-icons/bs";
import { useState } from 'react';

const InfoArea = () => {

  const [productData] = useState(data);
  const [sizeClick, setSizeClick] = useState(false);
  const sizeClickHandle = () => {
    setSizeClick(!sizeClick)
  }
  const [count, setCount] = useState(1);
  const incClickHandle = () => {
    setCount(count+1)
  }
  const decClickHandle = () => {
    setCount(count-1)
  }


  return(
    <>
      <RightWrapper>
        <div className="product-info">
          <h1 className="title">{productData[0].name}</h1>
          <p className="price">{productData[0].price}원</p>
          <span className="gender">{productData[0].gender}</span>
          <p className="content">{productData[0].content}</p>
        </div>
        <div className="product-size">
          <ul className="product-size-list">
            {
              productData[0].size.map( (sizes, i) =>
                <li 
                  key={i}
                  className={`${sizeClick === true ? '' : 'active'}`}
                  onClick={sizeClickHandle}>
                  {sizes}
                </li>
              )
            }
          </ul>
          <CountWrapper>
            <ul className="product-count-list">
              <li className="product-count">{count}</li>
              <li className="product-dec" onClick={ count <= 0 ? count : decClickHandle}>-</li>
              <li className="product-inc" onClick={incClickHandle}>+</li>
            </ul>
          </CountWrapper>
          <BtnWrapper>
            <button className="cartBtn Btn">장바구니</button>
            <button className="buyBtn Btn">바로구매</button>
            <button className="likeBtn"><BsSuitHeart /></button>
          </BtnWrapper>
        </div>
      </RightWrapper>
    </>
  )
}
export default InfoArea;

const RightWrapper = styled.div`
  position: fixed;
  width: 400px;
  height: 300vh;
  padding: 30px 0;

  .product-info {
    padding-bottom: 24px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 28px;
      margin-bottom: 12px;
      color: 1a1a1a;
      letter-spacing: -0.025em;
    }
    .price {
      font-size: 18px;
      line-height: 24px;
      color: #000;
      letter-spacing: -0.025em;
      margin-bottom: 14px;
    }
    .gender {
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
      color: #757575;
      margin-bottom: 14px;
    }
  }

  .product-size {
    margin-top: 50px;
    
    .product-size-list {
      display: flex;
      flex-wrap: wrap;

      li {
        border: 1px solid #eee;
        padding: 15px 20px;
        cursor: pointer;
      }
      li.active {
        background-color: #000;
        border: 1px solid #000;
        color: #fff;
      }
    }
  }
`;

const CountWrapper = styled.div`
  margin: 30px 0 20px 0;

  ul {

  }
  li {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid #eee;
    padding: 10px 20px;
    cursor: pointer;
  }

  .product-count {
    font-weight: 400;
  }
  .product-count-list {

  }
  .product-count-dec {

  }
  .product-count-inc {

  }

`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
  .Btn {
    display: block;
    max-width: 150px;
    height: 50px;
    margin-right: 5px;
    width: 100%;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      opacity: 0.7;
    }
  }

  .cartBtn {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  .buyBtn {
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
  }
  .likeBtn {
    min-width: 50px;
    height: 50px;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;