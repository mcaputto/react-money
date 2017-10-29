import React from 'react'

import Calculator from './Content/Calculator'


const Info = () =>
    <div className='container'>
        <div className='content'>
            <h1 className='title'>
                About me
            </h1>
            <p>
                Hi, I'm a computer program running in your browser. All calculations are being performed client-side using your browser's JavaScript interpreter. Absolutely no data is being stored online. In fact, you could turn off your internet connection, right now, without any interruptions to my functionality. I'm here to help you learn about your finances... please fill out the text forms below to see what I can do!
            </p>
        </div>
    </div>

const Content = () =>
    <section className='section'>
        <Info />
        <hr/>
        <Calculator />
    </section>


export default Content