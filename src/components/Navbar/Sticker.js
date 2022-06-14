// > styled-components
import styled from 'styled-components';

function Sticker(){
  return(
    <>
      <Wrapper>
        <a href="/">
          <img src="img/sticker-logo.png" alt="" />
          <span>척 70 시즈널 컬러</span>
        </a>
      </Wrapper>
    </>
  )
}
export default Sticker;

const Wrapper = styled.div`
  position: fixed;
  right: -130px;
  bottom: 5vh;
  width: 230px;
  height: 80px;
  background-color: #000;
  border-radius: 50px 0 0 50px;
  padding-right: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    right: 0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100%;
  }
  span {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }
`;