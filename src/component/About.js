import React from 'react'
import './About.css';

import web_warriors from'./resources/web_warriors.png';
import mnnit from'./resources/mnnit.png';
import priyansh from'./resources/priyansh.jpg';
import pranal from'./resources/pranal.png';
import harsh from'./resources/harsh.png';
import abhishek from'./resources/abhishek.png';


export default function About() {
  return (
    <>
      <img class="warriors" alt="Error in img" src={web_warriors}/>
    <img class="mnnit" alt="Error in img" src={mnnit}/>
    <header>
        <nav class="navbar" id="nav">
            <ul>
                <li><a href="home.html"> Home</a></li>
                <li><a href="newspaper.html"> Newspaper</a></li>
                <li><a href="books.html"> Books</a></li>
                <li><a href="magazine.html">Magazines</a></li>
                <li><a href="novel.html">Novels</a></li>
                <li><a href="studymaterial.html">Study_Materials</a></li>

            </ul>
        </nav>
    </header>
<br/>
    <div id="profile">
        <div class="head">Contributors</div>
        <div>
            <div class="logo" id="name">
                <img class="profile" alt="Error in img" src={priyansh}/>
                <br/>
                Priyansh Verma <br/>20208097 <br/>IT'24
            </div>
            <div class="logo" id="name"><img class="profile" alt="Error in img" src={pranal}/>
                <br/>
               Pranal Wankhade  <br/>20208090 <br/>IT'24 
            </div>
        </div>
        <div>
            <div class="logo" id="name"><img class="profile" alt="Error in img" src={harsh}/>
                <br/>
               Harsh <br/>20208051 <br/>IT'24 
            </div>
            <div class="logo" id="name"><img class="profile" alt="Error in img" src={abhishek}/>
                <br/>
                Abhishek Kumar<br/>20205007  <br/>ECE'24 
            </div>
        </div>
    </div>
    </>
  )
}
