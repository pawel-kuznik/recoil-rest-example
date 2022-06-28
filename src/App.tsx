import { RecoilRoot } from 'recoil';
import './App.css';
import TodoForm from './widgets/TodoForm';
import TodosList from './widgets/TodosList';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoForm/>
        <TodosList/>
      </div>
    </RecoilRoot>
  );
}

export default App;
