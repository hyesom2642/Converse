// > styled-components
import styled from 'styled-components';

// > components
import Banner1 from './Banner1';
import ShopByStyle from './ShopByStyle/ShopByStyle';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Banner4 from './Banner4';
import Banner5 from './Banner5/Banner5';
import Banner6 from './Banner6';
import BestSeller from './BestSeller/BestSeller';
import Banner7 from './Banner7';
import Banner8 from './Banner8';
import Banner9 from './Banner9';
import TrendingStyle from './TrendingStyle/TrendingStyle';
import Explore from './Explore';
import Service from './Service';
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
          <Banner5 />
          <Banner6 />
          <BestSeller />
          <Banner7 />
          <Banner8 />
          <Banner9 />
          <TrendingStyle />
          <Explore />
          <Service />
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
