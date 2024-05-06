import React from 'react'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import Slider from "react-slick";
import { baseImgUrl } from '../../helpers/functions-general';

const SliderTop10 = ({setMovieInfo, movies, setMovieData, groupings, sliderHeader}) => {
  const getGroupings = movies.filter((movie) => movie.groupings === groupings)

  const handleShowMovieInfo = (movie) => {
    setMovieInfo(true)
    setMovieData(movie)
  };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        centerMode: true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        
      };
      function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            // style={{ ...style, display: "flex", background: "green"}}
            onClick={onClick}>
            <RxCaretRight />
        </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "flex", background: "green"}}
                onClick={onClick}>
                <RxCaretLeft />
            </div>
        );
      }
      return (
        <>
        
        <h3 className='text-3xl mb-5 font-bold'>{sliderHeader}</h3>
        <Slider {...settings}>
        
        
        {getGroupings.map((movies, key) => (
          <div className='pr-6' key={key}>
            <button className='relative cursor-pointer mr-10' onClick={() => handleShowMovieInfo(movies)}>
              <div className='flex flex-row gap-2 pr-6'>
              <img src={`${baseImgUrl}/movie/${movies.trendingNumber}`} alt="" className='w-[320px] h-[200px] bg-cover absolute -translate-x-[70%] z-[-10]' />
              
              <img src={`${baseImgUrl}/movie/${movies.image}`} alt="" className='w-[150px] h-[200px] bg-cover' />
              </div>
            </button>
          </div>
         ))}
        </Slider>
        </>
      );
}

export default SliderTop10