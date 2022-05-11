import React, { useEffect, useState } from 'react';
import logoWhite from '../../img/logoDarkBg.svg';
import logoBlack from '../../img/logoLightBg.svg';
import './NavBar.css';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    
    const controlNavBar = () => {
        if(window.scrollY > 50){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", controlNavBar);
    //if(navbar) window.addEventListener("scroll", controlNavBar);
    //else window.removeEventListener("scroll", controlNavBar);

    return(
        <div className = {navbar ? 'activeNav NavBar' : 'NavBar'}>
            <img className ={navbar ? 'activeNav img' : 'img'} src={navbar ? logoBlack : logoWhite}/>
        </div>
    )

}

export default NavBar;