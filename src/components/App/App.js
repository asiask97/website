import React from 'react';
import './App.css';
import '../../styles/fonts.css'
import NavBar from '../NavBar/NavBar';
import MainPanel from '../MainPanel/MainPanel';
//Images on main page
import img1 from '../../img/img1.jpg';


function App() {

  // load on 0 on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const panelOne = {textOne: 'Some text about company idk yet  about how good the company is and what it dose like its super fast or somethin', textTwo: 'Something text', buttonText: 'Conact Us', image: img1}
  
  return (
    <div className="App">
      {/* --- NAV BAR --- */}
      <NavBar/>
      {/* --- HERO SECTION --- */}
      <div className='hero_section'>

        <div className='hero_text'>
            <h1>SOMEEEE TEXT </h1>
            <h1>THATTAKES ABOUT </h1>
            <h1>3LINESSSS </h1>
        </div>
      </div>

      {/* --- BODY CONTENT --- */}
      {
        //<div className='container' ref={container}></div>
      }
      <div className='break'></div>
      <MainPanel content={panelOne}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>

    </div>
  );
}

export default App;
