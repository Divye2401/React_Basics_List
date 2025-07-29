import { useState, useEffect } from "react";
import Board from "./Board";
import "./App.css";

export default function App() {
  const [boards, setBoards] = useState(() => {
    const saved = localStorage.getItem("boards");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Todo", tasks: [] },
          { id: 2, title: "In Progress", tasks: [] },
          { id: 3, title: "Done", tasks: [] },
        ];
  });

  // ✅ Save to localStorage whenever boards change
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  function addTask(boardId, text) {
    if (!text.trim()) return;
    setBoards((prev) =>
      prev.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: [...board.tasks, { id: Date.now(), text, done: false }],
            }
          : board
      )
    );
  }

  function deleteTask(boardId, taskId) {
    setBoards((prev) =>
      prev.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: board.tasks.filter((task) => task.id !== taskId),
            }
          : board
      )
    );
  }

  function toggleTaskDone(boardId, taskId) {
    setBoards((prev) =>
      prev.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: board.tasks.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
              ),
            }
          : board
      )
    );
  }

  function moveTask(boardId, taskId, targetBoardId) {
    let taskToMove;
    const newBoards = boards
      .map((board) => {
        if (board.id === boardId) {
          taskToMove = board.tasks.find((t) => t.id === taskId);
          return {
            ...board,
            tasks: board.tasks.filter((t) => t.id !== taskId),
          };
        }
        return board;
      })
      .map((board) => {
        if (board.id === targetBoardId && taskToMove) {
          return { ...board, tasks: [...board.tasks, taskToMove] };
        }
        return board;
      });

    setBoards(newBoards);
  }

  function editTask(boardId, taskId, newText) {
    setBoards((prev) =>
      prev.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: board.tasks.map((task) =>
                task.id === taskId ? { ...task, text: newText } : task
              ),
            }
          : board
      )
    );
  }

  // ✅ Handle drag drop
  function handleDrop(e, targetBoardId) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("task"));
    moveTask(data.boardId, data.taskId, targetBoardId);
  }

  return (
    <>
      <header>Organize Your Tasks Efficiently</header>
      <div className="board-container">
        {boards.map((board) => (
          <div
            key={board.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, board.id)}
          >
            <Board
              board={board}
              boards={boards}
              addTask={addTask}
              deleteTask={deleteTask}
              toggleTaskDone={toggleTaskDone}
              moveTask={moveTask}
              editTask={editTask}
            />
          </div>
        ))}
      </div>
    </>
  );
}
