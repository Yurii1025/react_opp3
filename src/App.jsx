import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    //<div className={`app ${theme === "dark" ? "dark" : "light"}`}>
    <div className={`app ${theme}`}>
      <div className="theme_container">
          <h1 className='theme_header'>Current theme <span className='span-el'>{theme}</span></h1>
          <button className='theme_button' onClick={toggleTheme}>Change theme</button>
      </div>
      

      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
    
  );
}

export default App
