import './App.css';
import {type} from "os";
import {Counter} from "./Components/Counter/Counter";

type propsType ={
    demo?: boolean

}

function App(props:propsType) {

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
