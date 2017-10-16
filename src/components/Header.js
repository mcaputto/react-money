import React from 'react'


const title =
    <h1 class='title'>
        Simple finance
    </h1>

const subtitle =
    <h2 className='subtitle'>
        A financial calculator for the rest of us
    </h2>


const Header = () =>
    <div className='hero is-primary'>
        <div className='hero-body'>
            <div class='container'>
                {title}
                {subtitle}
            </div>
        </div>
    </div>


export default Header
