import React , {Fragment} from "react";
import Header from "./components/Headers";
import "./App.css";
import Todos from "./components/Todos";


const App = () => {
  return (
    <Fragment>
      <Header/>
      <Todos/>
    </Fragment>
    
  );
};

export default App;
