import React, { useState, useRef } from "react";

const Counter: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10); 
      }, 10);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (time: number) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / 1000 / 60 / 60);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${Math.floor(
      milliseconds / 10
    )
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Stopwatch</h1>
        <div className="text-4xl font-mono mb-8">
          {formatTime(time)}
        </div>
        <div className="flex gap-4">
          <button
            onClick={startStopwatch}
            className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 disabled:bg-gray-300"
            disabled={isRunning}
          >
            Start
          </button>
          <button
            onClick={stopStopwatch}
            className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 disabled:bg-gray-300"
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            onClick={resetStopwatch}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
