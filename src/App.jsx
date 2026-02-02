import TaskForm from "./components/TaskForm";
import Column from "./components/Column";

function App() {
  return (
    <div className="app">
      <h1>Gestor de Tareas</h1>

      <TaskForm />

      <div className="board">
        <Column title="Pendientes" status="todo" />
        <Column title="En Progreso" status="progress" />
        <Column title="Completadas" status="done" />
      </div>
    </div>
  );
}

export default App;
