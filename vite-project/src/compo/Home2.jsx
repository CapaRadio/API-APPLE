import React from 'react';
import '../compo/Home2.css';
import Img from '../assets/imgA/logo.png'
import Img2 from '../assets/imgA/whit-removebg-preview.png'
import Img3 from '../assets/imgA/blue-removebg-preview.png'
import Img4 from '../assets/imgA/pink-removebg-preview.png'
import Img5 from '../assets/imgA/iphone-13-finish-select-202207-6-1inch-green-removebg-preview.png'
import Img6 from '../assets/imgA/iphone-13-finish-select-202207-6-1inch-product-red__1_-removebg-preview__1_-removebg-preview__1_-removebg-preview.png'
import Navbar from './Navbar';

function Home2() {
//     let image = document.querySelector('.image');
// let container = document.querySelector('.container');
 
// function iphones(iphone){
//     image.src = iphone;
// }
// function colors(color){
//     container.style.background = color;
// }



  return (


    <div className="container">    
    <Navbar/>
  <header>
    <a href="#">
      <img src={Img} className="logo" />
    </a>
    <ul>
      <li>
        <a href="/">Acceuil</a>
      </li>
      <li>
        <a href="/">Produits</a>
      </li>
      <li>
        <a href="/">Panier</a>
      </li>
      <li>
        <a href="/">A propos</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  </header>
  <div className="content">
    <div className="text">
      <h2>Iphone 13 </h2>
      <p>
        6 MegaPixels<br/>
        128 Go <br/>
        Hautes Perfomances <br/>
        Zoom 0,5 <br/>
      </p>
      <a href="#">Tous Les Produits</a>
    </div>
    <div className="img">
      <img className="image" src={Img2}/>
    </div>
    <div className="icon">
      <img
        onclick="iphones(this.src) ; colors('#000')"
        src={Img2}
      />
      <img
        onclick="iphones(this.src) ; colors('#1689a1')"
        src={Img3}
      />
      <img
        onclick="iphones(this.src) ; colors('#ffcaca')"
        src={Img4}
      />
      <img
        onclick="iphones(this.src) ; colors('#5a7830')"
        src={Img5}
      />
      <img
        onclick="iphones(this.src) ; colors('#ff0000')"
        src={Img6}
      />
    </div>
  </div>
</div>

  )
}

export default Home2;