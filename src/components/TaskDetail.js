import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = ({ tasks }) => {
    const { id } = useParams();
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
        </div>
    );
};

export default TaskDetail;
