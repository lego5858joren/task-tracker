import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);

    // 🧠 Fetch tasks from the backend
    useEffect(() => {
        fetch("http://localhost:8080/api/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.error("Error fetching tasks:", err));
    }, []);

    // ➕ Add task
    const handleAdd = (task) => {
        fetch("http://localhost:8080/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json()) // Expect a task object back
            .then((newTask) => {
                console.log("New task added:", newTask); // Check the new task
                setTasks((prev) => [...prev, newTask]); // Update the task list state
            })
            .catch((err) => console.error("Error adding task:", err));
    };

    // ❌ Delete task
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/tasks/${id}`, {
            method: "DELETE",
        }).then(() => setTasks((prev) => prev.filter((task) => task.id !== id)));
    };

    // ✅ Toggle completion
    const handleToggle = (task) => {
        const updated = { ...task, completed: !task.completed };
        fetch(`http://localhost:8080/api/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updated),
        })
            .then((res) => res.json())
            .then((updatedTask) =>
                setTasks((prev) =>
                    prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
                )
            );
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
            <h1>📝 Task Tracker</h1>
            <TaskForm onAdd={handleAdd} />
            <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
        </div>
    );
}

export default App;




