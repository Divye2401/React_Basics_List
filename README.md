# Task Management App

A simple yet powerful **Kanban Board** built with **React** that allows you to manage tasks across multiple boards.  
This project demonstrates **core React concepts** and serves as a hands-on learning project for beginners transitioning into real-world development.

---

## 🚀 Features

✅ Create multiple tasks under boards (Todo, In Progress, Done)  
✅ Mark tasks as **completed** or **edit/delete** them  
✅ **Move tasks** between boards (via dropdown or drag-and-drop)  
✅ **Persistent storage** using `localStorage`  
✅ **Filter tasks** by status (All, Active, Completed)  
✅ Modern **UI styling** with a black-purple gradient theme

---

## 🛠️ Tech Stack

- **React (Hooks & Functional Components)**
- **HTML, CSS (Modern Flexbox Layout)**
- **Local Storage API**
- **JavaScript ES6+**

---

## 📚 React Concepts Used

This project serves as a **revision exercise**, covering:

- **Components & JSX** – Breaking the UI into reusable components (`Board`, `Task`, `Header`)
- **Props & State** – Passing data down and managing board/task state
- **Controlled Components** – Handling form inputs for adding/editing tasks
- **State Management** – Updating nested state (boards & tasks) immutably
- **Prop Drilling** – Sharing functions like `addTask`, `deleteTask` between components
- **Reconciliation & Re-rendering** – React’s diffing algorithm in action while updating lists
- **Event Handling** – Buttons, dropdowns, drag-and-drop events
- **Side Effects** – Using `useEffect` for persistent storage
- **Conditional Rendering** – Editing mode vs. normal task display

---

## 📂 Project Structure

```
src/
│── App.jsx          # Main component managing all boards
│── Board.jsx        # Individual board with tasks
│── Task.jsx         # Task item component
│── Header.jsx       # App header
│── App.css          # Styling
```

---

## 🚀 Getting Started

1️⃣ **Clone the repository**

```bash
git clone https://github.com/your-username/kanban-board.git
```

2️⃣ **Navigate to project folder**

```bash
cd kanban-board
```

3️⃣ **Install dependencies**

```bash
npm install
```

4️⃣ **Run the project**

```bash
npm start
```

---

## 🌟 Future Improvements

- ✅ Dark/Light theme toggle
- ✅ Drag-and-drop **board reordering**
- ✅ Backend API integration for multi-user collaboration

---

## 🙌 Acknowledgement

This project was built as a **learning exercise** to practice **React fundamentals** and replicate a real-world junior developer workflow.
