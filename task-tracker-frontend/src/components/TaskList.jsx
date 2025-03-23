import React from "react";

const TaskList = ({ tasks, onDelete, onToggle }) => {
    console.log("Tasks in TaskList:", tasks); // Check if the tasks are being passed properly

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                            }}
                            onClick={() => onToggle(task)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => onDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;



