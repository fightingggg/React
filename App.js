import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItem from './components/TodoItem';
import { todoListState } from './todoAtom';
import TodoList from './components/TodoList';

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <div >
     <TodoItem/>
     {todoList.map((todoList)=>(
       <TodoList key={todoList.id} item={todoList}/>
     ))}
    </div>
  );
}

export default App;
