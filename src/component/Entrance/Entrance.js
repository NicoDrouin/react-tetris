import React from 'react'
import PropTypes from 'prop-types'
import './Entrance.scss'
import kremlin from '../../assets/img/kremlin.svg'
import logoReact from '../../assets/img/react.svg'

import { connect } from 'react-redux'


const Entrance = ( { closeEntranceCreator } ) => {

    return (
        <section className='entrance'>

            <img src={kremlin} alt='Kremlin'/>

            <div className='table top'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div className='T'></div>
                <div className='T'></div>
                <div className='T'></div>
                <div></div>
                <div className='L'></div>
                <div className='L'></div>
                <div className='L'></div>
                <div></div>
                <div className='T'></div>
                <div className='T'></div>
                <div className='T'></div>
                <div></div>
                <div></div>
                <div className='S'></div>
                <div className='S'></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div className='L'></div>
                <div className='L'></div>
                <div className='L'></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div className='T'></div>
                <div></div>
                <div></div>
                <div className='L'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='T'></div>
                <div></div>
                <div></div>
                <div className='Z'></div>
                <div></div>
                <div className='S'></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div className='L'></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div className='O'></div>
                <div className='O'></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='Z'></div>
                <div className='Z'></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div className='O'></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div className='J'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div className='O'></div>
                <div></div>
                <div className='O'></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='J'></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div className='J'></div>
                <div className='J'></div>
                <div className='J'></div>
                <div></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div></div>
                <div className='O'></div>
                <div></div>
                <div className='O'></div>
                <div></div>
                <div className='I'></div>
                <div></div>
                <div className='J'></div>
                <div className='J'></div>
                <div className='J'></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>
            </div>

            <div className='table bottom'>
                <img src={logoReact} alt='logo React'/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <br/>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <p>A React-powered Tetris</p>
            <span className='btn' onClick={() => closeEntranceCreator()}>Play</span>

        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        closeEntranceCreator: () => dispatch({ type: 'CLOSE_ENTRANCE' }),
    }
}

Entrance.propTypes = {
    closeEntranceCreator: PropTypes.func.isRequired
}

export default connect(
    undefined,
    mapDispatchToProps
)(Entrance)