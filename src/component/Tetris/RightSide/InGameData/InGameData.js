import React from 'react'
import './InGameData.scss';

const InGameData = ( { lib, data } ) => {
    return (
        <div className='num-data'>
            {lib} :<br/>
            {data}
        </div>
    )
}

export default InGameData