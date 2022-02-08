
import React, { useState, useEffect } from 'react';

import presentMap from '../img/maps/map_present.png'


const Infopage = ({appStage, setAppStage}) => {

  const [btnState, setBtnState] = useState(0)
  const [timer, setTimer] = useState(3)

  
  useEffect(() => {
    if (timer !== 0 && btnState) {
      setTimeout(setTimer, 1000, timer - 1);
    } else if (timer === 0) {
      setAppStage(1)
    }
    // eslint-disable-next-line
  }, [timer, btnState])
  
  


  return (
    <div className='info'>
      <div className="container">
        <div className="info__inner">
          <div className="info__inner-title">Quest Game</div>
          <div className="info__inner__body">
            <div className="item">
              <div className="item-title">История</div>
              <div className="item-body">Представьте, что вы путешественник в другом параллельно-сказочном мире, где обитают разные интересные существа. В ходе своего очередного похода вы забрели в глухой лес и теперь не знаете выхода. Ваша задача - выбраться как можно быстрее из этого леса пока вас не съели. Каждое ваше решение повлияет на конечный результат.</div>
            </div>
            <div className="item">
              <div className="item-title">Карта</div>
              <div className="item-body">На протяжении всего квеста вам будет доступна карта, на которой будет помечено место текущей локации.</div>
              <img className='item-image' src={presentMap} alt="" />
            </div>
            <div className="item">
              <div className="item-title">Помощь</div>
              <div className="item-body">Если ты не можешь решить задачу, просто открой справку, там наверняка есть решение твоей проблемы.</div>
            </div>

            <div className="ready">
              <div className="ready-title">Ты уже готов?</div>
              <div onClick={() => setBtnState(1)} className="ready-btn">{btnState ?  timer : "Да, я готов!"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infopage;
