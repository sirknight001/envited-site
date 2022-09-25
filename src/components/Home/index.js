import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import '../../assets/event.png'

const Home = () => {
  return (
    <>
    <img className='event' src={require('../../assets/event.png')} alt='event' />
    <div className='text-box-home'>
    <h1 className='h1-home'>Imagine if
        <span className='snapchat'> Snapchat </span>
        had events
    </h1>
    </div>
    <p className='detail'>Easily host and share events with your friends across any social media.</p>
    <Link to="/create" className="flat-button-home">🎉 Create my event</Link>
    </>
  )
}

export default Home