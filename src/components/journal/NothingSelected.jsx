import React from 'react'

export const NothingSelected = () => {
    return (
        <div className='nothing__main-content'>
            <p>
                Select an entry
                <br />
                or create a new one!
            </p>
            <i className='far fa-star fa-4x mt-5'></i>
        </div>
    );
}
