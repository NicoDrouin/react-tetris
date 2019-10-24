import React from 'react'
import './About.scss';

import { connect } from 'react-redux'

const About = ( { setPopinCreator } ) => {

    function openPopin() {
        document.documentElement.classList.add('popin-is-open');
        setPopinCreator()
    }

    return (
        <div className='about'>
            <p onClick={openPopin}>About</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPopinCreator: () => dispatch({ type: 'SET_POPIN_STATE', popinState: 'about'}),
    }
}

export default connect(
    undefined,
    mapDispatchToProps
)(About)