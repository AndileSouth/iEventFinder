
import './Home.css'
import { useState } from 'react';


const HOME = () => {

 /*  // Step 1: Initialize the state variable `sliderOptions` with an array of options
  const [sliderOptions, setSliderOptions] = useState([
    "All", "Music", "Health", "Sports", "Free","etc","etc","etc","etc","etc","etc","etc","etc","etc"
  ]);


  // Step 2: Define the `prev` function
  const prev = () => {
    // Step 3: Remove the last element from the `sliderOptions` array
    const lastOption = sliderOptions.pop();
    // Step 4: Add the removed element to the beginning of the array
    sliderOptions.unshift(lastOption);
    // Step 5: Update the state with the modified `sliderOptions` array
    setSliderOptions([...sliderOptions]); // Trigger a re-render
  };

  // Step 6: Define the `next` function
  const next = () => {
    // Step 7: Remove the first element from the `sliderOptions` array
    const firstOption = sliderOptions.shift();
    // Step 8: Add the removed element to the end of the array
    sliderOptions.push(firstOption);
    // Step 9: Update the state with the modified `sliderOptions` array
    setSliderOptions([...sliderOptions]); // Trigger a re-render
  }; */


  // slider

  const [sliderOptions, setSliderOptions] = useState([
    "All", "Music", "Health", "Sports", "Free"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(null);

  const prev = () => {
    setAnimation("slide-right");
    setTimeout(() => {
      setAnimation(null);
      const lastOption = sliderOptions.pop();
      sliderOptions.unshift(lastOption);
      setCurrentIndex(0);
      setSliderOptions([...sliderOptions]);
    }, 300); // Wait for the animation duration (0.3 seconds) before updating state
  };

  const next = () => {
    setAnimation("slide-left");
    setTimeout(() => {
      setAnimation(null);
      const firstOption = sliderOptions.shift();
      sliderOptions.push(firstOption);
      setCurrentIndex(0);
      setSliderOptions([...sliderOptions]);
    }, 300); // Wait for the animation duration (0.3 seconds) before updating state
  };

  const handleOptionClick = (index) => {
    // Set the clicked index as the new active index
    setCurrentIndex(index);
  };

    
  // fetches

  const [data, setData] = useState([
    "fetch1","fetch2","fetch3","fetch4","fetch5","fetch6","fetch7","fetch8","fetch9"
  ]);

  // location vissability 

  function showLocation() {
    const locations = document.querySelector('.location-search');

    const computedStyle = window.getComputedStyle(locations);

    const display = computedStyle.getPropertyValue('display');

    if(display === 'none') {
      locations.style.display = 'block'
    } else {
      locations.style.display = 'none'
    }
  }

  // sort options

  function showSort() {
    // remember to fix after click
    const sortOpts = document.getElementById('sort-opts')

    const computedStyle = window.getComputedStyle(sortOpts);

    const display = computedStyle.getPropertyValue('display');

    if(display === 'none') {
      sortOpts.style.display = 'block'
    } else {
      sortOpts.style.display = 'none'
    }
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
                
                <div id="slider-main" className={`slider-row row`}>

                

          {sliderOptions.map((option, index) => (
            <div
              key={index}
              className={`opt cursor col ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleOptionClick(index)} // Handle click to set active index
            >
              {option}
            </div>
          ))}

                


                </div>
                    

                <div id='right-btn' className=" cursor col slide right" onClick={() => {
                  next()
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>

              </div>

              <div className="event-opt-settings">
                <h4 className='row'><span className='md'>All Events in </span>
                <span className="location cursor" onClick={showLocation}>
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    Durban
                </span>

                <div className="location-search col">

                 <div className='cursor'>loading...</div> 
                 <div className='cursor'>loading...</div> 
                 <div className='cursor'>loading...</div> 

                </div>
                </h4>

                

                <div className="all-opts row">

                <ul className="opts-list row">
                    <li className="opts cursor">All</li>
                    <li className="opts cursor">Today</li>
                    <li className="opts cursor">Weekend</li>
                    <li className="opts cursor">Free</li>
                    <li className="opts cursor">Online</li>
                </ul>

                <div id='sort' className="opts col sort" onClick={showSort}>
                   <p className='cursor'>Sort</p>
                  <div id='sort-opts' className="sort-opts">
                    <div className='cursor'>Popular</div>
                    <div className='cursor'>New</div>
                    <div className='cursor'>A-Z</div>
                    <div className='cursor'>Z-A</div>
                  </div>
                  </div>

                </div>
                

              </div>

              <div className="all-events">
                <p className="total-events-no">
                    1000 events
                </p>

                <div className="events">

                    {data.map(data => (
                      <div className="event">{data}</div>
                      )) }
                    {/* <div className="event"></div> */}

                </div>
              </div>
                
            </div>
        </div>
     );
}
 
export default HOME;