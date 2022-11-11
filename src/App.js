import './App.css';
import Header from './components/Header';
import ToDo from './components/ToDo';
import Clock from './components/Clock';

function App() {
  return (
    <div className="m-auto text-center">
      <Clock />
      <br></br>
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
