import React from 'react';
import './Content.css';

const Content = ( props ) => {
    return (
        <div className='content-container'>
            <div className='row-container first'>
                <span className='new'>New</span>
                <span className='mono grayish'>Monograph Dashboard</span>
            </div>

            <h2 className='barlow-condensed'>
                Powerful insights <br/>into your team
            </h2>

            <p className='text barlow-condensed'>
                Project planning and time tracking <br/> for agile teams
            </p>
            <div className='row-container bottom'>
                <button>Schedule a demo</button>
                <span className='grayish'>to see a live preview</span>
            </div>
        </div>
    );
}

export {Content};