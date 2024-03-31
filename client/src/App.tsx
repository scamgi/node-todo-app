import "./App.scss";
import { tasks } from './db/tasks';

function App() {
  const t = tasks;

  return (
    <main>
      <div className="container">
        <div className="new-task">
          <input type="text" placeholder="Add a new task" className="new-task__text" />
          <button className="new-task__btn">+</button>
        </div>
        <div className="todo">
          <h1 className="todo__title">Tasks to do - 4</h1>
          <div className="todo__list">
            {t.filter(task => task.completed === false).map(task => {
              return <div className="todo__list__element" key={task.id}>
                <span className="todo__list__element__text">{task.name}</span>
                <span className="todo__list__element__done">v</span>
                <span className="todo__list__element__delete">x</span>
              </div>
            })}
          </div>
        </div>
        <div className="done">
          <h1 className="done__title">Done - 1</h1>
          <div className="done__list">
            {t.filter(task => task.completed === true).map(task => {
              return <div className="done__list__element">
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
