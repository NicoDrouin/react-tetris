import React, { Fragment } from 'react'
import './HighScores.scss';

import { connect } from 'react-redux'

const HighScores = ( { highScoresList } ) => {

    if (localStorage.getItem('scores')) {
        highScoresList = JSON.parse(localStorage.getItem('scores'))
    } else {
        highScoresList = []
    }

    return (
        <Fragment>
            {
                highScoresList.length > 0 &&
                <section className='high-scores'>
                    <p>High-scores :</p>
                    <ul>
                        {highScoresList.map((score, i) => 
                            <li key={i}>{score}</li>
                        )}
                    </ul>
                </section>
            }
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        highScoresList: state.updateHighScoresReducer
    }
}

export default connect(
    mapStateToProps,
    undefined
)(HighScores)