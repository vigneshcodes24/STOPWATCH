import { useEffect, useState } from "react";
import "./App.css";

function App() {
 
 const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <>
    <div className="App">
      <header>STOPWATCH</header>
      <div className="timer">{formatTime()}</div>
      <div className="buttons">
        <button className="btn1" onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className="btn2" onClick={handleReset}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App;
