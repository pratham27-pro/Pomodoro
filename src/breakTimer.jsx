import React, {useState, useEffect} from 'react'
import style from './style.module.css'

function BreakTimer(){
    const [min, setMin] = useState(5);
    const [sec, setSec] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if(isActive){   
            interval = setInterval(()=>{
                if(min===0 && sec===0){
                    clearInterval(interval);
                    setIsActive(false);
                } else if(sec === 0){
                    setMin(m => m - 1);
                    setSec(59);
                } else setSec(s => s - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    },[isActive, sec, min]);

    const startTimer = () => {
        setIsActive(true);
    };

    const reload = () => {
        setMin(5);
        setSec(0);
        setIsActive(false);
    }
       
    return(
        <div>
            <p>{min < 10 ? `0${min}`: min}:{sec < 10 ? `0${sec}` : sec}</p>
            <div className = {style.box}>
                <button onClick={startTimer}>Start</button>
                <button onClick={reload} className={style.reload}>🔄️</button>
            </div>
        </div>
    );
}

export default BreakTimer