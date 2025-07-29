import { useState } from "react";
import Task from "./Task";

export default function Board({
  board,
  boards,
  addTask,
  deleteTask,
  toggleTaskDone,
  moveTask,
  editTask,
}) {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = board.tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "pending") return !task.done;
    return true;
  });

  return (
    <div className="board">
      <h3>{board.title}</h3>

      {/* ✅ Filter dropdown */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="pending">Pending</option>
      </select>

      <ul>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            boardId={board.id}
            boards={boards}
            deleteTask={deleteTask}
            toggleTaskDone={toggleTaskDone}
            moveTask={moveTask}
            editTask={editTask}
          />
        ))}
      </ul>

      <input
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(board.id, text);
          setText("");
        }}
      >
        ➕
      </button>
    </div>
  );
}
