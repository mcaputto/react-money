import React, { Component } from 'react'


const title =
    <p className="title is-1">
        Simple finance
    </p>

const subtitle =
    <p className="subtitle is-3">
        A financial calculator for the rest of us
    </p>

const introduction =
    <p>
        Hi, I'm a computer program running in your browser. All calculations
        are being performed client-side using your browser's JavaScript
        interpreter. Absolutely no data is being stored online. In fact, you
        could turn off your internet connection, right now, without any
        interruptions to my functionality. I'm here to help you learn about
        your finances... please fill out the text forms below to see what I can
        do!
    </p>

const Header = () =>
    <div>
        {title}
        {subtitle}
        {introduction}
        <br/>
    </div>


export default Header
