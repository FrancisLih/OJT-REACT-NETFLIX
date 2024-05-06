import React from 'react'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import Slider from "react-slick";
import { baseImgUrl } from '../../helpers/functions-general';

const SliderBasic = ({setMovieInfo, movies, setMovieData, groupings, sliderHeader}) => {
  const getGroupings = movies.filter((movie) => movie.groupings === groupings)

  const handleShowMovieInfo = (movie) => {
    setMovieInfo(true)
    setMovieData(movie)
  };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
          <div key={key}>
            <button className='relative cursor-pointer' onClick={() => handleShowMovieInfo(movies)}>
              <div flex>
              <img src={`${baseImgUrl}/movie/${movies.image}`} alt="" className='w-[320px] h-[200px] bg-cover absolute' />
              </div>
              <img src={`${baseImgUrl}/movie/${movies.image}`} alt="" className='w-[320px] h-[200px] bg-cover' />

              <span className='px-2 py-1 rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[12px]'>Recently Added</span>
            </button>
          </div>
         ))}
        </Slider>
        </>
      );
}

export default SliderBasic