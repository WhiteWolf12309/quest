import './scss/index.scss'

import { useState } from 'react';

import Infopage from './components/Infopage';
import Gamepage from './components/Gamepage';
import Resultspage from './components/Resultspage';

function App() {

  const [appStage, setAppStage] = useState(0)
  const [countAnsweredQ, setCountAnsweredQ] = useState(0)
  const [points, setPoints] = useState(0)
  
  
  const timeStart = Date.now()

  let gameStage

  const resultsData = {
    answeredQuestions: countAnsweredQ,
    timeStart: timeStart,
    points: points
  }


  if (appStage === 1) {
    gameStage = <Gamepage appStage={appStage}  setAppStage={setAppStage} setCountAnsweredQ={setCountAnsweredQ} countAnsweredQ={countAnsweredQ} setPoints={setPoints} points={points} />
  } else if (appStage === 0){
    gameStage = <Infopage appStage={appStage}  setAppStage={setAppStage} />
  } else if (appStage === 2) {
    gameStage = <Resultspage appStage={appStage}  setAppStage={setAppStage} resultsData={resultsData} setCountAnsweredQ={setCountAnsweredQ} />
  }

  return (
    <div className="App">
      {gameStage}
    </div>
  );
}

export default App;
