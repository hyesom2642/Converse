// > styled-components, icons
import styled from 'styled-components';
import { BsSuitHeart } from "react-icons/bs";

function CardForm({summerwhite}) {
  return(
    <>
      <CardWrapper>
        <img 
          src={summerwhite.frontImg}
          alt="" 
          onMouseOver={(e) => (e.currentTarget.src=`${summerwhite.backImg}`)}
          onMouseOut={(e) => (e.currentTarget.src=`${summerwhite.frontImg}`)}
        />
        <div className="icon-wrapper">
          <BsSuitHeart />
        </div>
        <div className="product-content">
            <h1>
              <a href="/">{summerwhite.name}</a>
            </h1>
            <p>{summerwhite.price}원</p>
        </div>
      </CardWrapper>
    </>
  )
}
export default CardForm;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .icon-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20.035px;
    font-size: 15px;
    cursor: pointer;
    transition: transform 0.15s ease-in-out;

    &:hover {
      transform: scale(1.5);
    }
  }

  .product-content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 23.387px;

    a, p {
      font-size: 14px;
      font-weight: 400;
      color: #555555;
    }

    a:hover {
      text-decoration: underline;
    }
`;