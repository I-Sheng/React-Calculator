import { useState, useRef, type MouseEvent } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e: MouseEvent) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current?.value));
  }

  function minus(e: MouseEvent) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current?.value));
  }

  function times(e: MouseEvent) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current?.value));
  }

  function divide(e: MouseEvent) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current?.value));
  }

  function resetInput(e: MouseEvent) {
    e.preventDefault();
    inputRef.current!.value = '';
  }

  function resetResult(e: MouseEvent) {
    e.preventDefault();
    setResult(() => 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <ul>
          <button onClick={plus}>add</button>
          <button onClick={minus}>substract</button>
          <button onClick={times}>multiply</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput}>resetInput</button>
          <button onClick={resetResult}>resetResult</button>
        </ul>
      </form>
    </div>
  );
}

export default App;
