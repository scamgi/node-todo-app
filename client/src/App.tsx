import { useEffect, useState } from "react";
import "./App.scss";
import { Task } from './utils';

function App() {
  const [tasks, setTasks] = useState([{}]);
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks', { method: 'GET' }).then(res => res.json()).then(data => setTasks(data));
  }, []);

  async function createNewTask() {
    try {
      const newTask = { name: newTaskName, completed: false };
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask)
      });
      const newTaskWithId = await response.json();
      console.log(newTaskWithId);
      setNewTaskName('');
      setTasks([...tasks, newTaskWithId]);
    } catch (error) {
      console.error(error);
    }
  }

  // TODO fix CORS policy
  async function markAsCompleted(id) {
    // try {
    //   console.log('http://localhost:5000/api/tasks/' + id);
    //   const response = await fetch('http://localhost:5000/api/tasks/' + id, {
    //     method: 'PUT',
    //     body: JSON.stringify({ completed: true })
    //   });
    //   const responseJson = await response.json();
    //   console.log(responseJson);
    //   if (responseJson && responseJson.id) {
    //     const index = tasks.findIndex(p => p.id === id);
    //     tasks[index].completed = true;
    //     setTasks(tasks);
    //   }
    //   else {
    //     console.error(responseJson);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  // TODO fix CORS policy
  async function remove(id) {
    try {
      const response = await fetch('http://localhost:5000/api/tasks/' + id, {
        method: 'DELETE'
      });
      const responseJson = await response.json();
      console.log(responseJson);
      setTasks(tasks.filter(p => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <div className="container">
        <div className="new-task">
          <input type="text" placeholder="Add a new task" className="new-task__text" value={newTaskName} onChange={e => setNewTaskName(e.target.value)} />
          <button className="new-task__btn" onClick={(e) => createNewTask()}>+</button>
        </div>
        <div className="todo">
          <h1 className="todo__title">Tasks to do - 4</h1>
          <div className="todo__list">
            {tasks.filter(task => task.completed === false).map(task => {
              return <div className="todo__list__element" key={task.id}>
                <span className="todo__list__element__text">{task.name}</span>
                <button className="todo__list__element__done" onClick={() => markAsCompleted(task.id)}>v</button>
                <button className="todo__list__element__delete" onClick={() => remove(task.id)}>x</button>
              </div>
            })}
          </div>
        </div>
        <div className="done">
          <h1 className="done__title">Done - 1</h1>
          <div className="done__list">
            {tasks.filter(task => task.completed === true).map(task => {
              return <div className="done__list__element" key={task.id}>
                <span className="done__list__element__text">{task.name}</span>
              </div>
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
