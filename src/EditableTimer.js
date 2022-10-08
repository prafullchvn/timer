import { useState } from 'react';
import Timer from './Timer';

const NumericInput = ({ handleChange }) => {
  return (
    <div>
      <input
        className='input-field'
        onChange={(e) => handleChange(+e.target.value)}
      />
    </div>
  );
};

const EditableTimer = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  if (isStarted) {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return <Timer interval={totalSeconds} />;
  }

  return (
    <div className='timer'>
      <div className='input-fields'>
        <NumericInput label='hours' handleChange={setHours} />
        <NumericInput label='minutes' handleChange={setMinutes} />
        <NumericInput label='seconds' handleChange={setSeconds} />
      </div>
      <button className='start-btn' onClick={() => setIsStarted(true)}>
        Start
      </button>
    </div>
  );
};

export default EditableTimer;
