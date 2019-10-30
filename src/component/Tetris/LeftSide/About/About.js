import React from 'react'
import PropTypes from 'prop-types'
import './About.scss'

import { connect } from 'react-redux'

const About = ( { setPopinCreator } ) => {

    function openPopin() {
        document.documentElement.classList.add('popin-is-open');
        setPopinCreator()
    }

    return (
        <section className='about'>
            <p onClick={openPopin}>About</p>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPopinCreator: () => dispatch({ type: 'SET_POPIN_STATE', popinState: 'about'}),
    }
}

About.propTypes = {
    setPopinCreator: PropTypes.func.isRequired
}

export default connect(
    undefined,
    mapDispatchToProps
)(About)