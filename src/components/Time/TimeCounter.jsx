import React, { useState, useEffect } from 'react';

const TimeCounter = () =>  {

    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
    
        <div>
            <header className="App-header">
                {seconds} seconds have elapsed since mounting.
            </header>
            <pre>{(new Date()).toLocaleTimeString()}</pre>
        </div>
    )
    
};

export default TimeCounter;
