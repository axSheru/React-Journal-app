import React from 'react';

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className="journal___entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.tonica.la/__export/1588444612791/sites/debate/img/2020/05/02/the_mandalorian_portada.jpg_1902800913.jpg)',
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className='journal__entry-title'>
                    Un nuevo día.
                </p>
                <p className='journal__entry-content'>
                    Deserunt aliquip ut reprehenderit sint fugiat.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Tuesday</span>
                <h4>22</h4>
            </div>
        </div>
    );
}
