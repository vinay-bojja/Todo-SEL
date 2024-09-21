import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
                    <Route path="/task/:id" element={<TaskDetail tasks={tasks} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
