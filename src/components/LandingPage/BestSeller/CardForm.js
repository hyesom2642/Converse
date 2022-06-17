// > styled-components, icons
import styled from 'styled-components';
import { BsSuitHeart } from "react-icons/bs";

function CardForm({bestProduct}) {
  return(
    <>
      <CardWrapper>
        <img 
          src={bestProduct.frontImg}
          alt="" 
          onMouseOver={(e) => (e.currentTarget.src=`${bestProduct.backImg}`)}
          onMouseOut={(e) => (e.currentTarget.src=`${bestProduct.frontImg}`)}
        />
        <div className="icon-wrapper">
          <BsSuitHeart />
        </div>
        <div className="bestseller">
          <h1>{bestProduct.type}</h1>
        </div>
        <div className="product-content">
            <h1>
              <a href="/">{bestProduct.name}</a>
            </h1>
            <p>{bestProduct.price}원</p>
        </div>
      </CardWrapper>
    </>
  )
}
export default CardForm;

const CardWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 50%;

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

  .bestseller {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20.035px;
    text-transform: uppercase;

    h1 {
      font-size: 15px;
      font-weight: 700;
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