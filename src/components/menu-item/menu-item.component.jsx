import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ title, link, imageUrl, size }) => {
  const nev = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => nev(`${link}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
