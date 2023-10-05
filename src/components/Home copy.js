
import './Home.css'
import { useState } from 'react';


const HOME = () => {

    var sliderMain = document.getElementById('slider-main');

    var sliderOpt = document.getElementsByClassName('opt');

    function prev() {
      sliderMain.prepend(sliderOpt[sliderOpt.length -1]);

    }

    function next() {
      sliderMain.append(sliderOpt[0]);
    }
    
    
    
    return ( 
        <div className="HOME">
            <div className="home-content">

              <div className="hero row">
                    FIND YOUR NEXT EVENT
              </div>

              
              <div className="opts-slide row">

                <div id='left-btn' className=" cursor col slide left" onClick={() => {
                  prev()
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div>
                
                <div id='slider-main' className="slider-row row">

                    <div className="opt cursor col">All</div>
                    <div className="opt cursor col">Music</div>
                    <div className="opt cursor col">Health</div>
                    <div className="opt cursor col">Sports</div>
                    <div className="opt cursor col">Free</div>
                    <div className="opt cursor col">All</div>
                    <div className="opt cursor col">Music</div>
                    <div className="opt cursor col">Health</div>
                    <div className="opt cursor col">Sports</div>
                    <div className="opt cursor col">Free</div>
                    

                </div>
                    

                <div id='right-btn' className=" cursor col slide right" onClick={() => {
                  next()
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>

              </div>

              <div className="event-opt-settings">
                <h4 className='row'>Events in 
                <span className="location cursor">
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    Durban
                </span>
                </h4>

                <div className="all-opts row">

                <ul className="opts-list row">
                    <li className="opts cursor">All</li>
                    <li className="opts cursor">Today</li>
                    <li className="opts cursor">Weekend</li>
                    <li className="opts cursor">Free</li>
                    <li className="opts cursor">Online</li>
                </ul>

                <div className="opts cursor">Sort</div>

                </div>
                

              </div>

              <div className="all-events">
                <p className="total-events-no">
                    1000 events
                </p>

                <div className="events">
                    <div className="event"></div>
                    <div className="event"></div>
                    <div className="event"></div>
                    <div className="event"></div>
                    <div className="event"></div>
                    <div className="event"></div>
                    <div className="event"></div>
                    <div className="event"></div>
                    <div className="event"></div>
                </div>
              </div>
                
            </div>
        </div>
     );
}
 
export default HOME;