import "./App.scss";

function App() {
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
            <div className="todo__list__element">
              <span className="todo__list__element__text">To study React fundamentals</span>
              <span className="todo__list__element__done">v</span>
              <span className="todo__list__element__delete">x</span>
            </div>
            <div className="todo__list__element">
              <span className="todo__list__element__text">To study React fundamentals</span>
              <span className="todo__list__element__done">v</span>
              <span className="todo__list__element__delete">x</span>
            </div>
            <div className="todo__list__element">
              <span className="todo__list__element__text">To study React fundamentals</span>
              <span className="todo__list__element__done">v</span>
              <span className="todo__list__element__delete">x</span>
            </div>
            <div className="todo__list__element">
              <span className="todo__list__element__text">To study React fundamentals</span>
              <span className="todo__list__element__done">v</span>
              <span className="todo__list__element__delete">x</span>
            </div>
          </div>
        </div>
        <div className="done">
          <h1 className="done__title">Done - 1</h1>
          <div className="done__list">
            <div className="done__list__element">
              <span className="done__list__element__text">To study React fundamentals</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
