import styled from 'styled-components';

// > components
import ProductImg from './ProductImg';
import Detail from './Detail';
import InfoArea from './InfoArea';

import { Container, Row, Col } from 'react-bootstrap';

function Product(){
  return(
    <>
      <Wrapper>
          <Row>
            <Col lg={8}>
              <ProductImg />
            </Col>
            <Col lg={4}>
              <InfoArea />
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <Detail />
            </Col>
          </Row>
      </Wrapper>
    </>
  )
}
export default Product;

const Wrapper = styled.div`
width: 100vw;
`;

