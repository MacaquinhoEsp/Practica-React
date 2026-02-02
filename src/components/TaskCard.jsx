import { useTasks } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask, moveTask } = useTasks();

  return (
    <div className={`task-card ${task.priority.toLowerCase()}`}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <small>Prioridad: {task.priority}</small>

      <div className="task-actions">
        <button onClick={() => deleteTask(task.id)}>🗑️</button>

        {task.status !== "todo" && (
          <button onClick={() => moveTask(task.id, "todo")}>⬅</button>
        )}

        {task.status === "todo" && (
          <button onClick={() => moveTask(task.id, "progress")}>➡</button>
        )}

        {task.status === "progress" && (
          <button onClick={() => moveTask(task.id, "done")}>✔</button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
