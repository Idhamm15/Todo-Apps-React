import './App.css';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className='card'>
      <div className='card__heading'>
        <h1>Todo App</h1>
      </div>
      <div className='card__content'>
        <TodoList/>
      </div>

    </div>
  );
}

export default App;
