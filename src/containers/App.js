import React from 'react'

import Header from '../components/Header'
import Calculator from '../containers/Calculator'
import Footer from '../components/Footer'


const introduction =
    <div className='notification'>
        Hi, I'm a computer program running in your browser. All calculations
        are being performed client-side using your browser's JavaScript
        interpreter. Absolutely no data is being stored online. In fact, you
        could turn off your internet connection, right now, without any
        interruptions to my functionality. I'm here to help you learn about
        your finances... please fill out the text forms below to see what I can
        do!
    </div>

const App = () =>
    <div>
        <Header />
        {introduction}
        <Calculator />
        <Footer />
    </div>

export default App
