import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Create = () => {
  return (
    <>
    <div className="container">
    <div className="title">Create Event</div>
    <div className="content">
      <form>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Event name</span>
            <input type="text" placeholder="Enter the event name" required />
          </div>
          <div className="input-box">
            <span className="details">Host name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <span className="details">Start date</span>
            <input type="text" placeholder="Start date of the event" required />
          </div>
          <div className="input-box">
            <span className="details">End date</span>
            <input type="text" placeholder="End date of the event" required />
          </div>
          <div className="input-box">
            <span className="details">Location</span>
            <input type="text" placeholder="Enter the location" required />
          </div>
          <div className="input-box">
            <span className="details">Event photo</span>
            <input className='choose-file' type="file" required />
          </div>
        </div>
        <Link to="/event" className="flat-button-create">Next</Link>
      </form>
    </div>
  </div>
    </>
  )
}

export default Create