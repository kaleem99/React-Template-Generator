import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Main";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state);
  console.log(state)
  return (
    <div className="App">
      <Header />
      <Main state={state} /> 
    </div>
  );
}

export default App;
  