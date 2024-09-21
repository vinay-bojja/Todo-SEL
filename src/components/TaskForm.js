import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, setEditTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDescription(editTask.description);
        }
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTask) {
            // Update logic can be implemented here
            setEditTask(null);
        } else {
            addTask({ title, description });
        }
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
