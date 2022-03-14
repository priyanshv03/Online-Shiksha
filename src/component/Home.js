import React from 'react';
import './Home.css';
import mylogo from'./resources/web_warriors.png';
import mnnit from'./resources/mnnit.png';
export default function Home() {
  return (
      <>
          
    <header>

<div> <img className="warriors" alt='our logo' src={mylogo}/>
    <img className="mnnit" alt="mnnit-logo" src={mnnit}/>
</div>
<div id="heading">
    <h2> Hola readers, here we are going to provide all basic materials</h2>
</div>
</header>


<div id="position">
<div className="inline" id="row1">
    <button type="button">
        <div className="logo" id="newspaper">
            <a href="newspaper.html">
                <div className="centre">Newspapers</div>
            </a>

        </div>
    </button>

    <button type="button">

        <div className="logo" id="novel">
            <a href="novel.html">
                <div className="centre"> Novel</div>
            </a>
        </div>
    </button><button type="button">
        <div className="logo" id="books">
            <a href="books.html">
                <div className="centre"> Books</div>
            </a>
        </div>
    </button>
</div>
<div className="inline" id="row2">
    <button type="button">
        <div className="logo" id="magazines">
            <a href="magazine.html">
                <div className="centre">Magazines</div>
            </a>
        </div>
    </button><button type="button">
        <div className="logo" id="study">
            <a href="studymaterial.html">
                <div className="centre">Study Materials</div>
            </a>
        </div>

    </button>
</div>
</div>

<br/>
      </>
 
  )
}

