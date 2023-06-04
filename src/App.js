import logo from './logo.svg';
import './App.css';
import A from './components/A';
import Task1 from './components/Task1';
import Task3 from './components/Task3';
function App() {
  return (
    <>
      <div className="container">
        <Task1 />
        <A />
        <Task3 />
      </div>
    </>
  );
}

export default App;
