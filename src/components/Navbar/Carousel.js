// import Swiper core and required modules
// import { Navigation, Pagination, A11y } from 'swiper';

// > styled-components
import styled from 'styled-components';

// > slider-slick
import Slider from "react-slick";

function Carousel(){
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <>
      <div className="SliderWrapper">
        <SliderWrapper {...settings}>
          <div>
            <a href="/">
              <h3>COMING SOON</h3>
              <p>22.06.17 10AM Stüssy 출시예정</p>
            </a>
          </div>
          <div>
            <a href="/">
              <h3>NEW</h3>
              <p>GLF 2.0 출시</p>
            </a>
          </div>
          <div>
            <a href="/">
              <h3>NOTICE</h3>
              <p>로그인이 어려우실 경우 FAQ를 참조해주세요.</p>
            </a>
          </div>

        </SliderWrapper>
      </div>
    </>
  )  
}
export default Carousel;

const SliderWrapper = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 560px;
  margin: 0 auto;
  text-align: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h3 {
      font-size: 14px;
      line-height: 18px;
      font-weight: bold;
    }
    p {
      font-weight: 400;
    }
  }

`;