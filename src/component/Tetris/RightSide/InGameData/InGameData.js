import React from 'react'
import PropTypes from 'prop-types'
import './InGameData.scss';

const InGameData = ( { lib, data } ) => {
    return (
        <section className='num-data'>
            {lib} :<br/>
            {data}
        </section>
    )
}

InGameData.defaultProps = {
    lib: "value",
    data: "0"
}

InGameData.propTypes = {
    lib: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired
}

export default InGameData