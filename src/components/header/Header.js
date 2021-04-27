import React from 'react'
import './Header.css'
import homeIcon from '../../images/home-icon.svg'
import disneyLogo from '../../images/logo.svg'
import searchLogo from '../../images/search-icon.svg'
import movieLogo from '../../images/movie-icon.svg'
import watchListLogo from '../../images/watchlist-icon.svg'
import seriesLogo from '../../images/series-icon.svg'
import originalLogo from '../../images/original-icon.svg'
import { auth, provider } from '../../firebase'
import { Link } from 'react-router-dom'

function Header() {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className='header'>
      <img src={disneyLogo} alt='DisneyLogo' className='disney__logo' />
      <div className='header__contents'>
        <img src={homeIcon} alt='ldfkngkalsf' />
        <h3>Home</h3>
        <img src={searchLogo} alt='' />
        <h3>Search</h3>
        <img src={watchListLogo} alt='' />
        <h3>watchlist</h3>
        <img src={originalLogo} alt='' />
        <h3>originals</h3>
        <img src={movieLogo} alt='' />
        <h3>movies</h3>
        <img src={seriesLogo} alt='' />
        <h3>series</h3>
      </div>
      <Link to='/home'>
        <button className='header__btn' onClick={handleAuth}>
          Login
        </button>
      </Link>
    </div>
  )
}

export default Header
