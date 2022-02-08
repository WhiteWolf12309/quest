
import React, {useState} from 'react';

import map from '../img/Map.svg'
import help from '../img/help.svg'

import Map from './Map';
import Help from './Help';

const Questionpage = ({ appStage, setAppStage, data, gameLevel, setGameLevel, points, setPoints, countAnsweredQ, setCountAnsweredQ }) => {

    const [showMap, setShowMap] = useState(false)
    const [showHelp, setShowHelp] = useState(false)

    const checkAnswer = (event) => {
        const answer = event.target.innerHTML

        if (answer.toString().includes(data.right_ans)) {
            setCountAnsweredQ(countAnsweredQ += 1)
            setPoints(points += 20)
        } else if (points !== 0) {
            setPoints(points -= 10)
        }    

        if (gameLevel * 4 === 96) {
            setGameLevel(prev => prev + 1)
            setTimeout(() => setAppStage(2), 1000)            
        } else if (gameLevel * 4 <= 96) {
            setGameLevel(prev => prev + 1)
        }
    }

    return (
        <div className='question'>
            <div className="container">
                <div className="question__inner">

                    <div className="question__inner__header">
                        <div className="progress-bar">
                            <div className="progress-bar-title">
                                <div className="title">{gameLevel ? `${gameLevel * 4} %` : 'Прогресс'}</div>
                            </div>
                            <div style={{width: gameLevel * 23.2}} className="progress"></div>
                        </div>
                        <div onClick={() => setShowMap(true)} className="map">
                            <div className="map-title">Карта</div>
                            <img className='map-img' src={map} alt="" />
                        </div>
                        <div onClick={() => setShowHelp(true)} className="help">
                            <div className="help-title">Помощь</div>
                            <img className='help-img' src={help} alt="" />
                        </div>
                    </div>

                    <div className='question__inner__title'>{data.title}</div>

                    <div className="answer__body">
                        <div className='answer green' onClick={checkAnswer}>
                            <div className='answer-text'>{data.ans1}</div>
                        </div>
                        <div  className='answer red' onClick={checkAnswer}>
                            <div className='answer-text'>{data.ans2}</div>
                        </div>
                        <div  className='answer orange' onClick={checkAnswer}>
                            <div className='answer-text'>{data.ans3}</div>
                        </div>
                        <div  className='answer primary' onClick={checkAnswer}>
                            <div className='answer-text'>{data.ans4}</div>
                        </div>
                    </div>

                </div>
            </div>

            {showMap && (<Map gameLevel={gameLevel} setShowMap={setShowMap} />)}
            {showHelp && <Help help_content={data.help_content} setShowHelp={setShowHelp} />}

        </div>
    );
}

export default Questionpage;
