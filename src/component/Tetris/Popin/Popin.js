import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Popin.scss'

import { connect } from 'react-redux'

const Popin = ( { popinState, setPopinCreator } ) => {

    function closePopin() {
        setPopinCreator()
        document.documentElement.classList.remove('popin-is-open');
    }

    return (
            popinState !== 'noPopin' &&
            <div className='popin-container'>
                <section className='popin'>
                    {
                        popinState === 'gameOver'
                        &&
                            <Fragment>
                                <p>Game over, the wall is falling.</p>
                                <p>The Politburo will never forget your sacrifice for creating order out of chaos.</p>
                                <span className='btn' onClick={closePopin}>Play again</span>
                            </Fragment>
                    }
                    {
                        popinState === 'about'
                        &&
                            <Fragment>
                                <p>This game is a tribute to Tetris and is not affiliated with the Tetris Company.</p>
                                <p>I did it to learn how to develop with React.</p>
                                <p>I used the font <a href='http://www.tenbytwenty.com/#munro'>Munro</a> created by <a href='http://edmerritt.com/'>Ed Merritt</a> and an icon from Saint Basil Cathedral made by <a href='https://www.freepik.com/home'>Freepik</a> from <a href='http://www.flaticon.com/'>www.flaticon.com</a></p>
                                <span className='btn' onClick={closePopin}>Okie dokie</span>
                            </Fragment>
                    }
                </section>
            </div>
    )
}

const mapStateToProps = (state) => {
  return {
    popinState: state.setPopinReducer
  }
}

const mapDispatchToProps = dispatch => {
    return {
        setPopinCreator: () => dispatch({ type: 'SET_POPIN_STATE', popinState: 'noPopin'}),
    }
}

Popin.propTypes = {
    setPopinCreator: PropTypes.func,
    popinState: PropTypes.string.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popin)