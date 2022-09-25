import React from 'react'
import './index.css'
import '../../assets/cake.png'
import '../../assets/calendar.png'
import '../../assets/location.png'
import '../../assets/arrow.png'

const Event = () => {
  return (
    <>
    <img className='cake' src={require('../../assets/cake.png')} alt='cake' />
    <div className='text-box-event'>
        <h1 className='h1-event'>
            Birthday Bash
        </h1>
        <p className='p-event'>Hosted by <span className='elysia'>Elysia</span></p>
    </div>

    <div className='info'>
    <div className='calendar'>
        <div className='logo'>
        <img className='logo-calendar' src={require('../../assets/calendar.png')} alt='calendar' />
        </div>
        <div className='up-low-info'>
        <p className='upper-info'>18 August 6:00PM</p>
        <p className='lower-info'>to <span>19 August 1:00PM</span> UTC +10</p>
        </div>
        <img className='arrow' src={require('../../assets/arrow.png')} alt='arrow' />
    </div>

    <div className='location'>
        <div className='logo'>
        <img className='logo-location' src={require('../../assets/location.png')} alt='location' />
        </div>
        <div className='up-low-info'>
        <p className='upper-info'>Street name</p>
        <p className='lower-info'>Suburb, State, Postcode</p>
        </div>
        <img className='arrow' src={require('../../assets/arrow.png')} alt='arrow' />
    </div>
    </div>
    </>
  )
}

export default Event