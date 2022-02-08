
import React from 'react';

import exitImg from '../img/exit.svg'

const Help = ({help_content, setShowHelp }) => {
    return (
        <div className='help-popup'>
            <div className="help-popup__inner">
                <div className="help-popup__inner__body">
                    <div className="header">
                        <div className="header__title">Помощь</div>
                        <img onClick={() => setShowHelp(false)} className='header__exit' src={exitImg} alt="" />
                    </div>
                    <div className="help-content">{help_content}</div>
                </div>
            </div>
        </div>
    );
}

export default Help;
