import React from 'react'
import './Home.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import sliderLogo1 from '../../images/slider-badging.jpg'
import sliderLogo2 from '../../images/slider-badag.jpg'
import sliderLogo3 from '../../images/slider-scales.jpg'
import channelLogo1 from '../../images/viewers-disney.png'
import channelLogo2 from '../../images/viewers-pixar.png'
import channelLogo3 from '../../images/viewers-marvel.png'
import channelLogo4 from '../../images/viewers-starwars.png'
import channelLogo5 from '../../images/viewers-national.png'
import video1 from '../../videos/1564674844-disney.mp4'
import video2 from '../../videos/1564676714-pixar.mp4'
import video3 from '../../videos/1564676115-marvel.mp4'
import video4 from '../../videos/1608229455-star-wars.mp4'
import video5 from '../../videos/1564676296-national-geographic.mp4'

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
  }
  return (
    // Full Home Screen
    <div className='home'>
      {/* top sliding bar start's here */}
      <div className='top__sliding__content'>
        <Slider {...settings}>
          <div className='slider__img slider__img1'>
            <a>
              <img src={sliderLogo1} alt='' />
            </a>
          </div>
          <div className='slider__img slider__img2'>
            <a>
              <img src={sliderLogo2} alt='' />
            </a>
          </div>
          <div className='slider__img slider__img3 '>
            <a>
              <img src={sliderLogo3} alt='' />
            </a>
          </div>
        </Slider>
      </div>

      {/* channels start's here */}
      <div className='container channels'>
        <div className='wrap'>
          <img src={channelLogo1} alt='' className='channel__logo' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video1} type='video/mp4' />
          </video>
        </div>
        <div className='wrap'>
          <img src={channelLogo2} alt='' className='channel__logo' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video2} type='video/mp4' />
          </video>
        </div>
        <div className='wrap'>
          <img src={channelLogo3} alt='' className='channel__logo' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video3} type='video/mp4' />
          </video>
        </div>
        <div className='wrap'>
          <img src={channelLogo4} alt='' className='channel__logo' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video4} type='video/mp4' />
          </video>
        </div>
        <div className='wrap'>
          <img src={channelLogo5} alt='' className='channel__logo' />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video5} type='video/mp4' />
          </video>
        </div>
      </div>

      {/* Recommended For You Starts Here */}
      <h2 className='title'>Recommend For You</h2>
      <div className='container recommended'>
        <div className='wrap'>
          <img
            src='https://tollywoodhq.com/imgs/ragalahari/samantha/7241-download-samantha-posters/heroine-samantha-posters5.jpg'
            alt=''
          />
        </div>
        <div className='wrap'>
          <img
            src='https://64.media.tumblr.com/d1164581581d2112ca330cd64edfc9b7/tumblr_pgtof3iL781tfw70go1_500.gifv'
            alt=''
          />
        </div>
        <div className='wrap'>
          <img
            src='https://www.filmcompanion.in/wp-content/uploads/2020/06/film-companion-vijay-Lead-image-4-1280x720.jpg'
            alt=''
          />
        </div>
        <div className='wrap'>
          <img
            src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/kadhal-konden-1.jpg'
            alt=''
          />
        </div>
      </div>

      {/* Trending start's here */}

      <h2 className='title'>Trending</h2>
      <div className='container recommended'>
        <div className='wrap'>
          <img
            src='https://img.onmanorama.com/content/dam/mm/en/entertainment/2020/karnan-movie-review.jpg'
            alt=''
          />
        </div>
        <div className='wrap'>
          <img
            src='https://moviegalleri.net/wp-content/uploads/2019/06/Vijay-Bigil-Movie-3rd-Look-Poster-HD.jpg'
            alt=''
          />
        </div>
        <div className='wrap'>
          <img
            src='https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Sarkar_vijay_DN.jpg?itok=3bBXryzA'
            alt=''
          />
        </div>
        <div className='wrap'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckBfoLYowCgU0EYIkQRmrjjPIMLo6VP2tYg&usqp=CAU'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Home
