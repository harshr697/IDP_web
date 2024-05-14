import React from 'react';
import "./topbar.css";
export default function Navigation() {
  return (
    <div className="top">
      <h1 className="topLeft">Gandhi Digital Archive</h1>
      <ul className="topList">
        <li href="#" className="topListItem">
          Home
        </li>
        <li href="#" className="topListItem">
          Search
        </li>
        <li href="#" className="topListItem">
          Archive
        </li>
        <li href="#" className="topListItem">
          Blog
        </li>
        <li href="#" className="topListItem">
          About
        </li>
      </ul>
    </div>
  );
}
