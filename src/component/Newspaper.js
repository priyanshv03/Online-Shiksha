import React from 'react'
import './Newspaper.css';


import mylogo from'./resources/web_warriors.png';
import mnnit from'./resources/mnnit.png';
import TOI_logo from'./resources/logo/TOI_logo.png';
import thehindu from'./resources/logo/thehindu.png';
import hindustan_times from'./resources/logo/hindustan_times.png';
import theindianexpress from'./resources/logo/theindianexpress.png';
import dainik_jagaran from'./resources/logo/dainik_jagaran.png';
import dainik_bhaskar from'./resources/logo/dainik_bhaskar.png';

export default function Newspaper() {
  return (<> 
  <img class="warriors"  alt="img not found" src={mylogo} />
          <img class="mnnit"  alt="img not found" src={mnnit} />
          <header>

              <nav class="navbar" id="nav">
                  <ul>
                      <li><a href="/"> Home </a></li>
                  <li><a href="/"> Newspaper </a></li>
              <li><a href="/"> Books </a></li>
          <li><a href="/">Magazines </a></li>
           <li><a href="/">Novels  </a></li>
                <li><a href="/">Study_Materials</a></li>
                <li><a href="/">About_us</a></li>

            </ul>
        </nav>
    </header>

    <br/>
    <div>
        <h1>English newspapers</h1>
        
        <div class="responsive">
            <div class="logo1" id="toi">
                <a href="https://drive.google.com/drive/folders/1Ajpf4bbY5ihULhNCKhgNuaNStQ5rTw47?usp=sharing">
                    <img id="width2"  alt="img not found" src={TOI_logo}/>
                  

                </a>
            </div>
            <div class="logo1" id="the_hindu">
                <a href="https://drive.google.com/drive/folders/1TE7t4iSImSVOJrBQe46hxECbPlI85KRW?usp=sharing">
                    <img id="height1"  alt="img not found" src={thehindu}/>
                </a>
            </div>
            <div class="logo1" id="hindustan_times">
                <a href="https://drive.google.com/drive/folders/1bqcI8K51xiNekiFRRHUqanmjcWNt94Ns?usp=sharing">
                    <img id="width1"  alt="img not found" src={hindustan_times}/>
                </a>
            </div>
            <div class="logo1" id="The_indianexpress">
                <a href="https://drive.google.com/drive/folders/1O4Xv5XmBOLl8E4kxIrkkpQFtDfyZvRWA?usp=sharing">
                    <img id="hieght2"  alt="img not found" src={theindianexpress}/>
                </a>
            </div>
        </div>
    </div>
    <div>
        
        <h1>Hindi newspapers</h1>
        <div class="responsive">
            <div class="logo1" id="dainik_jagaran">
                <a href="https://drive.google.com/drive/folders/1aG_oQH2POsg_3TniS4pc3IBgSAJte_Tk?usp=sharing">
                    <img id="width3"  alt="img not found" src={dainik_jagaran}/>
                </a>
            </div>
            <div class="logo1" id="dainik_bhaskar">
                <a href="https://drive.google.com/drive/folders/1gan9Huo7UpCvsDIWawp6yiQxX6I6b3sy?usp=sharing">
                    <img id="hieght3"  alt="img not found" src={dainik_bhaskar}/>
                </a>
            </div>
        </div>
    </div>
    <br />
 </>
  )
}
