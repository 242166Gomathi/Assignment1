
import './App.css';
import Register from './components/class-components/Register';
import FunctionalRegister from './components/functional-components/FunctionalRegister';




function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="component">
          <Register />
        </div>
        <div className="component">
          <FunctionalRegister />
        </div>
      </div>
    </div>
  );
}
export default App;
