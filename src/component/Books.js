import React from 'react'
import './Books.css';

import web_warriors from'./resources/web_warriors.png';
import mnnit from'./resources/mnnit.png';

export default function Books() {
  return (
    <>
      <img className="warriors" alt ="error in img" src={web_warriors}/>
  <img className="mnnit" alt ="error in img" src={mnnit}/>
  <header>
    <nav className="navbar" id="nav">
      <ul>
        <li><a href="home.html"> Home</a></li>
            <li><a href="newspaper.html"> Newspaper</a></li>
            <li><a href="books.html"> Books</a></li>
            <li><a href="magazine.html">Magazines</a></li>
            <li><a href="novel.html">Novels</a></li>
            <li><a href="studymaterial.html">Study_Materials</a></li>
            <li><a href="aboutus.html">About_us</a></li>
      </ul>
    </nav>
  </header>

  <header className="header">
    
    {/* <!--mid box for title--> */}
    <div className="mid">
      <div>BOOKS</div>
    </div>
   
    
  </header>
  <div className="header1">PERSONALITY DEVELOPMENT</div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B1Ef5shqGHDNZ25HSHdiMFJBVkU/view?usp=sharing">
      <img alt ="error in img" src="logo1/richdad.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Rich dad and Poor dad</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B1Ef5shqGHDNUFRXVzdLSV9iSVk/view?usp=sharing">
      <img alt ="error in img" src="logo1/mind control.jpg"  width="600" height="400"/>
    </a>
    <div className="desc">Mind Control</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B1Ef5shqGHDNa1R1TFprYnNabDA/view?usp=sharing">
      <img alt ="error in img" src="logo1/artofspeaking.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Art of Public Speaking</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B1Ef5shqGHDNdE1YMnZtMHVmLVU/view?usp=sharing">
      <img alt ="error in img" src="logo1/growrich.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Think and grow Rich</div>
  </div>
  <br/>
  <div className="header1">BIOGRAPHY</div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/1FTKaOHCd2-NvRy5XbfDQ0PjIW69yLbag/view?usp=sharing">
      <img alt ="error in img" src="logo1/n1.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Wings of Fire</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B1Ef5shqGHDNM3Jrb1NvRURqemM/view?usp=sharing">
      <img alt ="error in img" src="logo1/yogi.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Life Of Yogi</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/14UVWdpVMS6i3V_wT_csXSopw8gBTvLHR/view?usp=sharing">
      <img alt ="error in img" src="logo1/n3.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Napolean life</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B1Ef5shqGHDNZm9SWnl5cG1EV0U/view?usp=sharing">
      <img alt ="error in img" src="logo1/warrent.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Warrent Buffett</div>
  </div>
  <br/>
  <div className="header1">LEADERSHIP</div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B3q9ZMSOj2NSZmJYQVhTV2IyWEE/view?usp=sharing">
      <img alt ="error in img" src="logo1/50.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> 50 Steps to Success</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B3q9ZMSOj2NSLTI1d0dxWWszRTQ/view?usp=sharing">
      <img alt ="error in img" src="logo1/Eleadeer.png"  width="600" height="400"/>
    </a>
    <div className="desc"> Educative Leadership</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B3q9ZMSOj2NSLTI1d0dxWWszRTQ/view?usp=sharing">
      <img alt ="error in img" src="logo1/Effective leader.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Effective Leadership</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/0B3q9ZMSOj2NSU0dFMUZUVUl5eXc/view?usp=sharing">
      <img alt ="error in img" src="logo1/entre.png"  width="600" height="400"/>
    </a>
    <div className="desc"> Enterpreneurs,Leader</div>
  </div>
  <br/>
  <div className="header1">ROMANTIC</div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/19vu2mpH032ncJJ_Vr8-8dfmb4-obIBVw/view?usp=sharing">
      <img alt ="error in img" src="logo1/n2.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> HALF GIRLFRIEND</div>
  </div>
  <div className="gallery">
    <a href="https://drive.google.com/file/d/1LMnPUDSszScDM__rGuGYLwa4385Tpt9Q/view?usp=sharing">
      <img alt ="error in img" src="logo1/r1.jpg"  width="600" height="400"/>
    </a>
    <div className="desc"> Love For A Deaf Rebel</div>
  </div>

    </>
  )
}
