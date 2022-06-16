// > styled-components
import styled from 'styled-components';

function Menubar(){
  return(
    <>
      <Wrapper>
        <Container>
          <MenuWrppaer>
            <MenuLeft>
              <ul>
                <li>
                  <a href="/">
                    <img src="img/logo.png" alt="logo" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    신발
                  </a>
                </li>
                <li>
                  <a href="/">
                    의류
                  </a>
                </li>
                <li>
                  <a href="/">
                    아동
                  </a>
                </li>
                <li>
                  <a href="/">
                    런칭캘린더
                  </a>
                </li>
                <li>
                  <a href="/">
                    SALE
                  </a>
                </li>
              </ul>
            </MenuLeft>
            <MenuRight>
              <ul>
                <li>
                  <a href="/">
                    아이콘1
                  </a>
                </li>
                <li>
                  <a href="/">
                    아이콘2
                  </a>
                </li>
                <li>
                  <a href="/">
                    아이콘3
                  </a>
                </li>
                <li>
                  <a href="/">
                    아이콘4
                  </a>
                </li>
              </ul>
              <div className="search">
                <span>검색</span>
                <span>아이콘</span>
              </div>
            </MenuRight>
          </MenuWrppaer>
        </Container>
      </Wrapper>
    </>
  )
}

export default Menubar;

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 10;
  width: 100vw;
  height: 60px;
  overflow-x: hidden;
  background-color: #fff;
`;

const Container = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

const MenuWrppaer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLeft = styled.div`
  img {
    width: 120px;
    height: 14px;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
  }
  li {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 11px;
    
    &:last-child a {
      color: #ff0000;
    }
  }
  a {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }
`;

const MenuRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 100%;
    padding: 0 20px;
    background-color: #000;
    color: #fff;

  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
  }
  li {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 20px;
  }
`;