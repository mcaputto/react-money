import React from 'react'


const footer =
    <div>
        <p>
            <strong>Simple finance</strong> by <a href='https://github.com/mcaputto'>mcaputto</a>
        </p>
        <p>
            Version 0.2.0
        </p>
    </div>

const CenteredFooter = () =>
    <div className='content has-text-centered'>
        {footer}
    </div>

const FooterContainer = () =>
    <div className='container'>
        <CenteredFooter />
    </div>

const Footer = () =>
    <footer className='footer'>
        <FooterContainer />
    </footer>


export default Footer
