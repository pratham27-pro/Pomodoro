import PomTimer from "./pomtimer"
import BreakTimer from "./breakTimer";
import LongBreak from "./longBreak";
import style from './App.module.css'
import React, {useState, useEffect} from 'react'

function App() {
  const [comp, setComp] = useState(<PomTimer/>);
  const quotes = [ '“Success is not final, failure is not fatal: it is the courage to continue that counts.”',
                   '“Start where you are. Use what you have. Do what you can.”', 
                   '“Nobody can go back and start a new beginning, but anyone can start today and make a new ending.”',
                   '“Confidence comes not from always being right but from not fearing to be wrong.”', 
                   "“Don't stop when you're tired. Stop when you're done.”", 
                   '“Hustle until you no longer need to introduce yourself.”'];
  let cnt = 0;
  const [quote, setQuote] = useState(quotes[0].toUpperCase());
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(cnt<5) cnt++;
      else cnt =0;
      setQuote(quotes[cnt].toUpperCase());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const pomtimer = () => {
    setComp(<PomTimer/>);
  }

  const breaktimer = () => {
    setComp(<BreakTimer/>);
  }
  
  const longBreaktimer =() => {
    setComp(<LongBreak/>);
  }
  return (
    <>
      <div className={style.quo}>{quote}</div>
      <div className={style.container}>
        <div className={style.buttons}>
          <button onClick={pomtimer}>Pomodro Timer</button>
          <button onClick={breaktimer}>Break</button>
          <button onClick={longBreaktimer}>Long Break</button>
        </div>
        <div>{comp}</div>
      </div>
    </>
  );
}

export default App
