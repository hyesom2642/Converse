import styled from 'styled-components';

function ProductImg(){
  return(
    <>
      <LeftContent>
        <ul>
          <li>
            <img src="img/product/런스타하이크블랙/런스타하이크블랙-0.jpg" alt="" />
          </li>
          <li>
            <img src="img/product/런스타하이크블랙/런스타하이크블랙-1.jpg" alt="" />
          </li>
          <li>
            <img src="img/product/런스타하이크블랙/런스타하이크블랙-2.jpg" alt="" />
          </li>
          <li>
            <img src="img/product/런스타하이크블랙/런스타하이크블랙-3.jpg" alt="" />
          </li>
          <li>
            <img src="img/product/런스타하이크블랙/런스타하이크블랙-4.jpg" alt="" />
          </li>
          <li>
            <img src="img/product/런스타하이크블랙/런스타하이크블랙-5.jpg" alt="" />
          </li>
        </ul>
      </LeftContent>
    </>
  )
}
export default ProductImg;

const LeftContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 68px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    li {
      width: 49%;
      margin-bottom: 16px;

      img {
        display: block;
        width: 100%;
      }
    }
  }
`;