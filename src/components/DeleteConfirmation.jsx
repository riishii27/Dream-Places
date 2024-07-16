import { useState, useEffect } from "react";
const Timer = 3000;


export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime,setRemainingtime] = useState(Timer);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setRemainingtime((prevTime)=> prevTime-10);
    },10);

    return ()=>{
      clearInterval(interval);
    };
  },[])

  useEffect(()=>{
   const timer = setTimeout(()=>{
      onConfirm();
    }, Timer)
   
     return ()=>{
      console.log('cleaning up timer...')
      clearTimeout(timer);
     }
  },[onConfirm])
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={Timer}/>
    </div>
  );
}
