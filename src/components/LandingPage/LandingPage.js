// > styled-components
import styled from 'styled-components';

// > components
import Banner1 from './Banner1';
import ShopByStyle from './ShopByStyle';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Banner4 from './Banner4';
import BestSeller from './BestSeller';
import Banner5 from './Banner5';
import Banner6 from './Banner6';
import Banner7 from './Banner7';
import Banner8 from './Banner8';
import TrendingStyle from './TrendingStyle';
import Explore from './Explore';
import Service from './Service';
import Support from './Support';
import Sticker from '../Navbar/Sticker';

function LandingPage(){
  return(
    <>
        <Wrapper>
          <Banner1 />
          <ShopByStyle />
          <Banner2 />
          <Banner3 />
          <Banner4 />
          <BestSeller />
          <Banner5 />
          <Banner6 />
          <Banner7 />
          <Banner8 />
          <TrendingStyle />
          <Explore />
          <Service />
          <Support />
          <Sticker />
        </Wrapper>
    </>
  )
}

export default LandingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow: hidden;
`;
