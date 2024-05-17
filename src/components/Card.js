import React, { useState, Component } from 'react';


export default function Card(props) {
  return (
    <div className="contact-card">
    <img src="./images/mr-whiskerson.png"/>
    <h3>Mr. Whiskerson</h3>
    <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.name}</p>
    </div>
    <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.phone}</p>
    </div>
    <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
    </div>
</div>
  )
}
