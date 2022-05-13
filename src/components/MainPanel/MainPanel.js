import React from 'react';
import './MainPanel.css';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import line from '../../img/line.json'

const MainPanel = (props) => {
    
    const container = useRef();
    
    useEffect(() => {
        const instance = lottie.loadAnimation({
          container:container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: line
        })

        return () => instance.destroy();
      }, [])

    return(
       <div className='MainPanel'>
        
        <img src={props.content.image}></img>
        <div className='headingContainer'>

            <h1 className='heading' >{props.content.textTwo}</h1>
            <div className='container' ref={container}></div>
        </div>
        <p className='bodytext'>{props.content.textOne}</p>
        <button><span class="text">{props.content.buttonText}</span></button>
        
       </div> 
    )

}

export default MainPanel;