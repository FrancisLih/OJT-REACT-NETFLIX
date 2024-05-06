import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FiSearch, FiBell } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import SliderBasic from './SliderBasic';
import ModalMovieInfo from './ModalMovieInfo';
import { movies } from './data';
import Footer from '../../partials/footer/Footer';
import SliderTop10 from './SliderTop10';
import ModalSearch from './ModalSearch';

const Movie = () => {
  const [showMovieInfo,setMovieInfo] = React.useState(false) 
  const [movieData,setMovieData] = React.useState(null) 

  const [search, setSearch] = React.useState(null);

  const handleShowSearch = () => setSearch(true)
  return (
    <>
    <div className='bg-[#141414] text-white'>
    <div className={`banner bg-[url(../../img/movie/banner-movie.png)] h-[90vh] w-full bg-cover isolate relative`}>
      <div className="backdrop bg-black/40 absolute top-0 left-0 h-full w-full -z-10"></div>
        <div className="header py-4 px-2 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-from-[rgba(0,0,0,0.2)]">
            <div className="flex justify-between items-center ">
                <div className='flex items-center gap-10'>
                    <img src={`${baseImgUrl}/logo.png`} alt="" className='w-[148px] h-[40px] object-cover'/>
                        <ul className='flex items-center gap-5 text-white'>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">TV Shows</Link></li>
                        <li><Link to="#">Movies</Link></li>
                        <li><Link to="#">New & Popular</Link></li>
                        <li><Link to="#">My List</Link></li>
                        <li><Link to="#">Browse by Language</Link></li>
                      </ul>
                </div>
                <div>
                  <ul className='flex items-center gap-2 text-white'>
                    <li><button onClick={handleShowSearch}><FiSearch/></button></li>
                    <li><button><FiBell/></button></li>
                    <li><button><img src="https://via.placeholder.com/50x50" alt="" className='rounded-md' /></button></li>
                    <FaCaretDown/>
                  </ul>
                </div>
            </div>
        </div>

        <div className="absolute left-[10%] bottom-[20%] text-white">
          <h1 className='text-4xl font-bold p-5 pl-0'>Young Sheldon</h1>
          <ul className='flex gap-5'>
            <li><button className='px-6 py-1.5 rounded-md bg-white text-stone-800 font-bold flex items-center gap-2'><FaPlay/>Trailer</button></li>
            <li><button className='px-6 py-1.5 btn bg-stone-600 text-white border-stone-600 flex items-center gap-2'><FiInfo/>More Info</button></li>
          </ul>
        </div>
    </div>
    <div className='slider-wrapper px-10 py-20'>
      
      <SliderTop10 setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} groupings="trending" sliderHeader="Trending Now"/>
      <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} groupings="Asian" sliderHeader="Asian Movies"/>
      <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} groupings="American" sliderHeader="American Movies"/>
    </div>
    </div>
    {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData}/>}
    
    {search && <ModalSearch setSearch={setSearch}/>}
    <Footer/>
    </>
  )
}

export default Movie