import React from 'react'
import './Login.css'
import cta_logo_1 from '../../images/cta-logo-one.svg'
import cta_logo_2 from '../../images/cta-logo-two.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <div className='login__content'>
        <img src={cta_logo_1} alt='' className='logo cta_logo_1' />
        <Link to='/home'>
          <button className='btn login_btn'>get all there</button>
        </Link>
        <p className='login__para'>
          get primiar access to Laya and the last dragonfor an addisnal fee with
          a disney+ subscription. as of 03/26/21, the price of disney+ will
          increase by $1
        </p>
        <img src={cta_logo_2} alt='' className='logo cta_logo_2' />
      </div>
    </div>
  )
}

export default Login
