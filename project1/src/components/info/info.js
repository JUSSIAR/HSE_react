import React from 'react';

import GWLine from '../gwLine/gwLine.js';
import './infoStyle.scss';

import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <React.StrictMode>
      <div id="infoHeader">
        <h1> Information </h1>
      </div>
      <GWLine/>
      <p className="info"> Unfortunately, there is no information here... </p>
      <br/><br/><br/>
      <Link to="/" className="linkToHome"> На главную </Link>
      <br/>
    </React.StrictMode>
  );
}

export default Info;
