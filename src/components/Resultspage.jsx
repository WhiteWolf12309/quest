
import React from 'react';
import { motion } from 'framer-motion'
import checkmark from '../img/icons/checkmark.svg'
import skull from '../img/icons/skull.svg'
import swords from '../img/icons/swords.svg'
import money from '../img/icons/money.svg'

import github from '../img/icons/github.svg'


const Resultspage = ({ setCountAnsweredQ, setAppStage, resultsData }) => {

    const playAgain = () => {
        setCountAnsweredQ(0) // clean answer's counter
        setAppStage(0)       // go back to first page (instruction)
    }

    return (
        <div className='results'>
            <div className="results__inner">
                <div className="results__inner__body">
                    <div className="results__inner__body-title">Молодец!</div>
                    <div className="results__inner__body-achievements">
                        <div className="achievement-item">
                            <div className="achievement-item-mark purple">
                                <img className='achievement-item-img' src={checkmark} alt="" />
                            </div>
                            <div className="achievement-item-title">Ты ответил правильно на <purple-800>{resultsData.answeredQuestions}</purple-800> вопросов из <purple-800>25</purple-800></div>
                        </div>

                        <div className="achievement-item">
                            <div className="achievement-item-mark red">
                                <img className='achievement-item-img' src={skull} alt="" />
                            </div>
                            <div className="achievement-item-title">Победил злого <purple-800>босса</purple-800></div>
                        </div>

                        <div className="achievement-item">
                            <div className="achievement-item-mark green">
                                <img className='achievement-item-img' src={money} alt="" />
                            </div>
                            <div className="achievement-item-title">Собрал <purple-800>{resultsData.points}</purple-800> монет из <purple-800>500</purple-800> возможных</div>
                        </div>

                        <div className="achievement-item">
                            <div className="achievement-item-mark orange">
                                <img className='achievement-item-img' src={swords} alt="" />
                            </div>
                            <div className="achievement-item-title">Уничтожил свыше <purple-800>тысячи</purple-800> чудовищ</div>
                        </div>
                    </div>
                    <div className="results__inner__body-buttons">
                        <motion.a whileHover={{ scale: 1.05 }} href='https://github.com/WhiteWolf12309/quest' className="guthub">
                            <div className="guthub__title">GitHub</div>
                            <img className='guthub__image' src={github} alt="" />
                        </motion.a>
                        <motion.div whileHover={{ scale: 1.05 }} onClick={playAgain} className="play-again">Отлично, хочу пройти квест снова!</motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resultspage;
