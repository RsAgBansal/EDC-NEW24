import React from "react"
//import Card from "./Card"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa";
import '../Eventspage/Eventspage.css'
import event1 from '../Eventspage/Image(EVENT)/event1.png'
import event2 from '../Eventspage/Image(EVENT)/event2.png'
import event3 from '../Eventspage/Image(EVENT)/event3.png'
import event4 from '../Eventspage/Image(EVENT)/event4.png'
import event5 from '../Eventspage/Image(EVENT)/event5.png'
import event6 from '../Eventspage/Image(EVENT)/event6.png'
import event7 from '../Eventspage/Image(EVENT)/event7.png'
import event8 from '../Eventspage/Image(EVENT)/event8.png'
import event9 from '../Eventspage/Image(EVENT)/event9.png'
import event10 from '../Eventspage/Image(EVENT)/event10.png'
import event11 from '../Eventspage/Image(EVENT)/event11.png'
import event12 from '../Eventspage/Image(EVENT)/event12.png'
import event13 from '../Eventspage/Image(EVENT)/event13.png'
import event14 from '../Eventspage/Image(EVENT)/event14.png'
import leaf1 from '../Eventspage/leaf.png'
import leaf2 from '../Eventspage/leaf2.png'
import Slidermain from '/src/components/Slider/Slidermain.jsx'
import Socials from "../../components/socials/socials"
import iatweblogo from '../Eventspage/iatweblogo.png'
import eventsbg from '../Eventspage/eventsbg.png'
import img1 from '../Eventspage/img1.png'
import card1 from '../Eventspage/card1.png'
import card2 from '../Eventspage/card2.png'
import card3 from '../Eventspage/card3.png'


function Eventspage() {
  return (
      <div className="h-auto w-full text-black">
        <img src= {eventsbg} alt="" />
        {/* <div className="h-screen md:text-[50px] backdrop-brightness-50 flex flex-col justify-center items-center text-center"> */}
          {/* <h1 className="lg:px-48">Experience Exclusivity : Join Premium Club Events</h1> */}
        {/* </div> */}
      
      <div className="bg-white w-screen overflow-hidden">
        <div className="mt-[150px] text-center text-slate-700">
          <h1 className="lg:text-[50px]">Unleash Wide Range of Exciting Events.</h1>
        </div>
        <div className="flex md:flex-row flex-col gap-8 justify-center items-center mt-20 md:p-20 p-8">
        <div className="flex flex-col justify-center items-center text-center border-2 border-black p-4 pt-8 gap-6 rounded-2xl text-white" style={{ backgroundImage: `url(${card1})`}} >
            <h1 className="font-bold md:text-[37px]">Formal events</h1>
            <p>Elevating Experiences with Distinguished Events</p>
            <button className="bg-white p-2 rounded-3xl text-black">Explore More</button>
            <img src={img1} alt="" srcset="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center border-2 border-black p-4 pt-8 gap-6 rounded-2xl" style={{ backgroundImage: `url(${card3})`}}>
            <h1 className="font-bold md:text-[37px]">Formal events</h1>
            <p>Elevating Experiences with Distinguished Events</p>
            <button className="bg-white p-2 rounded-3xl">Explore More</button>
            <img src={img1} alt="" srcset="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center border-2 border-black p-4 pt-8 gap-6 rounded-2xl text-white " style={{ backgroundImage: `url(${card2})`}}>
            <h1 className="font-bold md:text-[37px]">Formal events</h1>
            <p>Elevating Experiences with Distinguished Events</p>
            <button className="bg-white p-2 rounded-3xl text-black">Explore More</button>
            <img src={img1} alt="" srcset="" />
        </div>
        
        </div>
        <div className="flex lg:flex-row bg-white p-20 text-center justify-center items-center">
          <img src={leaf1} alt="" />
          <p className="md:text-[32px]">Our Events are more than just gatherings. They are opportunities to transform your entrepreneurial journey. Unleash the Entrepreneur in you and connect with us for the latest updates and exclusive announcements.!</p>
          <img src={leaf2} alt="" />
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <a href="https://facebook.com/edcbitmesra/"><FaFacebookSquare className="w-14 h-14" /></a>
          <a href="https://www.instagram.com/edcbitmesra/"><FaInstagram className="w-14 h-14" /></a>
          <a href="https://www.linkedin.com/company/edcbitmesra/"><FaLinkedin className="w-14 h-14" /></a>
        </div>
      </div>
      <div className="md:m-20 m-4 mt-20">
        <div className="flex flex-col justify-center items-center lg:m-4 p-4 md:p-2 shadow-2xl rounded-2xl">
          <h1 className="font-bold text-[32px] uppercase">formal events</h1>
          <div className="flex md:flex-row flex-col justify-center ">
            <div className="event-card-container">
              <div className="event-card">
                <img src={event1} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>STARTUP MELA</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            <div className="event-card-container">
              <div className="event-card">
                <img src={event6} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>STOCK STOCISM</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            <div className="event-card-container">
              <div className="event-card">
                <img src={event3} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>FANTASY START</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center">
          <div className="event-card-container">
              <div className="event-card">
                <img src={event4} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>MARKETING SPINOFF</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            <div className="event-card-container">
              <div className="event-card">
                <img src={event2} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>INVESTOR'S HAT</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:m-20 m-4 mt-20">
      <div className="flex flex-col justify-center items-center lg:m-4 p-4q lg:p-2 shadow-2xl rounded-2xl text-center">
      <h1 className="font-bold text-[32px] uppercase">semi-formal events</h1>
          <div className="flex md:flex-row flex-col justify-center">
            <div className="event-card-container">
              <div className="event-card">
                <img src={event7} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>BIT-THON</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            <div className="event-card-container">
              <div className="event-card">
                <img src={event8} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>ANCIENT ENTP</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            <div className="event-card-container">
              <div className="event-card">
                <img src={event9} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>MARKETING SPINOFF</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center">
            <div className="event-card-container">
              <div className="event-card">
                <img src={event10} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>QUIZ TRIVIA</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="md:m-12 m-4 mt-20">
      <div className="flex flex-col justify-center items-center lg:m-4 p-4 lg:p-2  shadow-2xl rounded-2xl">
      <h1 className="font-bold text-[32px] uppercase">informal events</h1>
          <div className="flex md:flex-row flex-col justify-center ">
            <div className="event-card-container">
              <div className="event-card">
                <img src={event12} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>BGMI</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            <div className="event-card-container">
              <div className="event-card">
                <img src={event13} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>VALORANT</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
            <div className="event-card-container">
              <div className="event-card">
                <img src={event14} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>IPL AUCTION</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center ">
          <div className="event-card-container">
              <div className="event-card">
                <img src={event5} alt="Event" className="event-image" />
                <div className="event-details">
                  <div className="event-header">
                    <h2>FIFA CONTEST</h2>
                    <button className="participate-button">PARTICIPATE</button>
                  </div>
                  <p>VENUE: ROOM 312</p>
                  <h4>DATE: 24/03/24</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slidermain />
      <Socials />
    </div>
  )
}

export default Eventspage