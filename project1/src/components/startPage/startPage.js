import React from 'react';
import './startPageStyle.scss';

import { Link } from 'react-router-dom';
import GWLine from '../gwLine/gwLine.js';

export default function StartPage() {
  return (
    <React.StrictMode>
      <div id = "startHeader">
        <h1> Start here! </h1>
      </div> 
      <GWLine/>
      <div id = "routerId">
        <ul>
          <li>
            <Link to="/projects" className="route1"> Projects </Link>
            {/* <details className="details"> Here you can find your own project list. </details> */}
            <br/><br/>
          </li>
          <li>
            <Link to="/info" className="route1"> Information </Link>
            {/* <details className="details"> Here you can find Information about this App. </details> */}
            <br/><br/>
          </li>
        </ul>
      </div>
    </React.StrictMode>
  );
}
