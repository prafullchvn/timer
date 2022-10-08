import { useEffect, useRef, useState } from 'react';

const useTimer = (interval) => {
  const [seconds, setSeconds] = useState(interval);
  const stopTimer = useRef(),
    resetTimer = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 0) {
          clearInterval(intervalId);
          return seconds;
        }
        return seconds - 1;
      });

      resetTimer.current = () => setSeconds(0);
      stopTimer.current = () => clearInterval(intervalId);
      return stopTimer;
    }, 1000);
  }, []);

  return [seconds, stopTimer.current, resetTimer.current];
};

/**
 * 3661
 *
 * seconds -> 3661 % 60 -> 1
 * 3661 - 1 -> 3660
 * 3660 / 60 -> 61
 * 61 % 60 -> 1 (minutes)
 * 61 / 60 -> 1 (hours)
 *
 */

const Timer = ({ interval }) => {
  const [totalSeconds, stopTimer, resetTimer] = useTimer(interval);

  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  console.log(totalSeconds, seconds, minutes, hours);

  return (
    <div className='timer'>
      <div className='input-fields'>
        <div className='input-field grey-underline'>{hours}</div>
        <div className='input-field grey-underline'>{minutes}</div>
        <div className='input-field grey-underline'>{seconds}</div>
      </div>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default Timer;
