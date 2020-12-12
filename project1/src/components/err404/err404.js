import React from 'react';

import GWLine from '../gwLine/gwLine.js';
import './err404Style.scss';

import { Link } from 'react-router-dom';
import err from '../../images/err3.png';

const Err404Page = () => {
  return (
    <React.StrictMode>
      <div id="errHeader">
        <h1> Undefined Page </h1>
      </div>
      <GWLine/>
      <p className="four04"> 404 </p>
      <div className="aroundErr">  
        <img 
          className="errImage1"
          src={err}
        />
        <img 
          className="errImage2"
          src={err}
        />
      </div>
      <br/><br/><br/>
      <Link to="/" className="linkToHome"> На главную </Link>
      <br/>
    </React.StrictMode>
  );
}

export default Err404Page;
