import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const createTask = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title: newTaskTitle });
            setTasks([...tasks, response.data]);
            setNewTaskTitle('');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const updateTask = async (id, updatedTitle) => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title: updatedTitle });
            const updatedTasks = tasks.map(task => (task.id === id ? response.data : task));
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const updatedTasks = tasks.filter(task => task.id !== id);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={createTask}>Create Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.title}
                        <button onClick={() => updateTask(task.id, prompt('Enter updated title:', task.title))}>Update</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData;
