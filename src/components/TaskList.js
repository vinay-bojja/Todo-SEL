import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, setTasks }) => {
    const [editTask, setEditTask] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TaskForm addTask={addTask} editTask={editTask} setEditTask={setEditTask} />
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                        <button onClick={() => toggleComplete(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => setEditTask(task)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
