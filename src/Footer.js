import React, { Component } from 'react'


const footer =
    <div>
        <p>
            <strong>Simple finance</strong> by <a href='https://github.com/mcaputto'>mcto</a>
        </p>
        <p>
            Built using&nbsp;
            <a href='https://reactjs.org'>React</a>&nbsp;
            <a href='http://babeljs.io'>Babel</a>&nbsp;
            <a href='http://www.ecma-international.org/ecma-262/6.0/index.html'>ES6</a>&nbsp;
            <a href='https://eslint.org'>ESLint</a>&nbsp;
            <a href='https://nodejs.org/en/'>Node</a>&nbsp;
            <a href='https://www.npmjs.com'>NPM</a>&nbsp;
            <a href='https://yarnpkg.com/en/'>Yarn</a>&nbsp;
            <a href='https://webpack.github.io/'>Webpack</a>&nbsp;
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
