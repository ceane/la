// Ceane Lamerez © 2020
import React from 'react'

const Header = () => (
  <header className="header">
    <h1 className="m0">
      <span className="color__cinemaZ">Ceane La.</span>

      <span className="focus explorable color__db">
        <span>&nbsp;/&nbsp;</span>
        <span>Software Engineer & CEO</span>
        <span className="color__f6">/ &#20320;&#22909;</span >
        <span className="color__f6">/ &#50668;&#48372;&#49464;&#50836;</span >
      </span>
    </h1>
    
    <section className="list-grid py1">
      <p className="m0">
        <span className="color__97">San Francisco, California</span>
        <span className="color__db"><span className="m-hide">&nbsp;&nbsp;</span >/&nbsp;&nbsp;</span>
        <span className="color__db">
          <span className="nowrap">&#127932; Listening to &ndash;</span>
          <a href="https://www.youtube.com/watch?v=3JrDhzPoLkU" target="_blank" rel="noopener noreferrer">Hoody (&#54980;&#46356;) - '&#50504;&#45397;&#55176; (Adios)</a>
        </span>
      </p >
      
      <ul className="list-style-none inline inline-all p0 m0 color__db">
        <li>
          <span><span className="m-hide">&nbsp;&nbsp;&nbsp;</span >/&nbsp;</span>
          <span><a href="https://ceane.github.io/">&#127765; Nocturnal<sup>&trade;</sup></a></span>
        </li>
        <li>
          <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <span><a href="https://ceane.github.io/">What's a Focus<sup>&trade;</sup>?</a></span>
        </li>
        <li>
          <span><span className="m-hide">&nbsp;&nbsp;</span>/&nbsp;&nbsp;</span>
          <span><span className="block">&#9632;</span> from Ceane Corporation</span>
        </li>
      </ul>

      <div></div>
    </section>
  </header>
)

export default Header
