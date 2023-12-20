import logo from "./logo.svg";
import "./App.css";

export default function App() {
  let count = 0;
  const increase = () => {count ++;}
  const decrease = () => {count ++;}
  return (
    <>
      <div className="App">
        <p>{count}</p>
        <button onClick={increase} >increase</button>
        <button onClick={decrease} >decrease</button>
      </div>
    </>
  );
}
