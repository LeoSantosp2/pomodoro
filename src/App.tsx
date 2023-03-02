import React from 'react';

import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
    return (
        <div className="container">
            <PomodoroTimer
                pomodoroTime={1500}
                shortRestTime={300}
                LongRestTime={1800}
                cycles={4}
            />
        </div>
    );
}

export default App;