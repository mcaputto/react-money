import React, { Component } from 'react'


const footer =
    <div>
        <p>
            <strong>Simple finance</strong> by <a href='https://github.com/mcaputto'>mcaputto</a>
        </p>
    </div>

const CenteredFooter = () =>
    <div className='content has-text-centered'>
        {footer}
    </div>

const Footer = () =>
    <footer className='footer'>
        <FooterContainer />
    </footer>

const FooterContainer = () =>
    <div className='container'>
        <CenteredFooter />
    </div>


export default Footer
