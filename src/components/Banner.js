import { useState, useEffect } from "react";
import './Banner.css';
import './Media.css';
import Logo from './Netflix_logo.png';
//

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

function Banner() {
  // const imageurl = "https://image.tmdb.org/t/p/original/";
  // //   const url='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  // const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  // const [value, setvalue] = useState([]);
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjIxYWRkZDE5MTViOTEzMGI5ODMyOWZkYjE0MDc2OCIsInN1YiI6IjY1OWJiNzA4YmQ1ODhiNjRhOTE0NGQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRfgLgPIiln_TEw_kY9FiAQArlVH4p8nu5lIoF7vJCo'
  //   }
  // };
  // useEffect(() => {
  //   async function get() {
  //     const data = await fetch(url, options)
  //     const data2 = await data.json();
  //     //  console.log(data2)
  //     setvalue(data2.results);
  //   }
  //   get();
  // }, [])
  const movie =  [
    {
      "Title": "The Lion King",
      "Year": "2019",
      "Runtime": "118 min",
      "dic":"After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
      "poster1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61KmBifDD2nlht7LZk0F31HfFQHbrtxLTFg&s"
    },
    {
      "Title": "Mowgli: Legend of the Jungle",
      "Year": "2018",
      "Runtime": "104 min",
      "dic":"A human child raised by wolves must face off against a menacing tiger named Shere Khan, as well as his own origins.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
      "poster1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hlGu8yAtfJX4C4qt8OSMcbCDtUYf59_sIg&s"
    },
    {
      "Title": "Doctor Strange",
      "Year": "2016",
      "Runtime": "115 min",
      "dic":"A neurosurgeon with a destroyed career sets out to repair his hands only to find himself.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      "poster1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiKQUax7TAB_Nnl4-YbEBwXNjhYGKmOsxkg&s"
    },
    {
      "Title": "John Wick",
      "Year": "2014",
      "Runtime": "101 min",
      "dic":"Retired hit-man John Wick (Keanu Reeves) loses his wife to cancer. After her funeral he receives a puppy she left him",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      "poster1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1faFLl_0arftACtVoBAezbfcd-8RbtddKA&s"
    },
    {
      "Title": "The Notebook",
      "Year": "2004",
      "Runtime": "123 min",
      "dic":"An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by the difference in their respective social classes.",
      "Poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStG-mZAOxasntAdc1YIoSaF3gBZJeQCXzZ6Q&s",
      "poster1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWDxZZAfogwiUUhsfHHYCDyOVnVPLW1Hklg&s"
    }
    
  ]
 


  return (
    <div id="wrapx">


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}


        modules={[Autoplay]}
      >
        <div id="sl-logo">   <img src={Logo}/></div>
        {
          movie.map(
            (data) => {
              const back=data.Poster;
              return (
                <div>
                     <div id="test"><img src={Logo}/>
                     
                       </div>
                  <SwiperSlide>
                    <div id="container"  >
                      <img width={'100%'} height={'550px'} src={data.poster1} ></img>



                      <div id="contant">

                        <div>
                          <img src={Logo} ></img>
                          <h1>{data.Title}</h1>
                          <div id="banner_btn">
                            <button>Watch Now</button>
                            <button>View Trailer</button>
                          </div>
                          <p>{data.dic}</p>

                        </div>

                      </div>
                      <div id="bottom-effect"></div>




                    </div>
                    <div id="sl-screen" style={{
                      backgroundSize: "cover",
                      backgroundImage:`url(${back})`}
                      }>
                        <div id="sl-btn">
                          <button> Play</button>
                          <button>Add</button>
                        </div>
                      <div id="bottom-effect"></div>
                    </div>
                  </SwiperSlide>

                  
                </div>

              )
            }
          )
        }
      </Swiper >


    </div >
  )
}
export default Banner;