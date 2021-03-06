import React from 'react'
import PropTypes from 'prop-types'
import './NextTetromino.scss';

const NextTetromino = ( { nextTetromino } ) => {

    function printNextTetromino() {
        switch(nextTetromino) {
            case 'I':
                return (
                    <div className='next-tetromino'>
                        <div className='line'>
                            <div className='I'></div>
                            <div className='I'></div>
                            <div className='I'></div>
                            <div className='I'></div>
                        </div>
                    </div>
                )
            case 'J':
                return (
                    <div className='next-tetromino'>
                        <div className='line'>
                            <div className='J'></div>
                            <div className='empty'></div>
                            <div className='empty'></div>
                        </div>
                        <div className='line'>
                            <div className='J'></div>
                            <div className='J'></div>
                            <div className='J'></div>
                        </div>
                    </div>
                )
            case 'L':
                return (
                    <div className='next-tetromino'>
                        <div className='line'>
                            <div className='empty'></div>
                            <div className='empty'></div>
                            <div className='L'></div>
                        </div>
                        <div className='line'>
                            <div className='L'></div>
                            <div className='L'></div>
                            <div className='L'></div>
                        </div>
                    </div>
                )
            case 'O':
                return (
                    <div className='next-tetromino'>
                        <div className='line'>
                            <div className='O'></div>
                            <div className='O'></div>
                        </div>
                        <div className='line'>
                            <div className='O'></div>
                            <div className='O'></div>
                        </div>
                    </div>
                )
            case 'S':
                return (
                    <div className='next-tetromino'>
                        <div className='line'>
                            <div className='empty'></div>
                            <div className='S'></div>
                            <div className='S'></div>
                        </div>
                        <div className='line'>
                            <div className='S'></div>
                            <div className='S'></div>
                            <div className='empty'></div>
                        </div>
                    </div>
                )
            case 'T':
                return (
                    <div className='next-tetromino'>
                        <div className='line'>
                            <div className='empty'></div>
                            <div className='T'></div>
                            <div className='empty'></div>
                        </div>
                        <div className='line'>
                            <div className='T'></div>
                            <div className='T'></div>
                            <div className='T'></div>
                        </div>
                    </div>
                )
            case 'Z':
                return (
                    <div className='next-tetromino'>
                     <div className='line'>
                            <div className='Z'></div>
                            <div className='Z'></div>
                            <div className='empty'></div>
                        </div>
                        <div className='line'>
                            <div className='empty'></div>
                            <div className='Z'></div>
                            <div className='Z'></div>
                        </div>
                    </div>
                )
            default:
                return <div className='next-tetromino'></div>
        }
    }

    return (
        <section className='next-tetromino-container'>
            {printNextTetromino()}
        </section>
    )
}

NextTetromino.propTypes = {
    NextTetromino: PropTypes.string
}

export default NextTetromino