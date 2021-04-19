import './App.scss';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

type propsType ={
    demo?: boolean

}

function App(props:propsType) {

  return (
    <div className="App">


      <Counter/>
        <Settings/>
    </div>
  );
}

export default App;
