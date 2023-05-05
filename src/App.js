import './App.css';
import { useState } from 'react';


function App() {
  const operators = ["+", "-", "*", "/", "."]
  const [enteredValue, setEnteredValue] = useState('');

  const handleNumberClick = (num) => {
    setEnteredValue(enteredValue + num);
  };

  const handleNumberEnter = (num) => {
    if (/^[0-9+*/%-]*$/g.test(enteredValue))
      setEnteredValue(num.target.value);
  };

  const handleDeleteLastNumber = () => {
    setEnteredValue(enteredValue.slice(0, -1));
  };

  const handleClearAllNumbers = () => {
    setEnteredValue([]);
  };

  let val;

  if (/^[0-9+*/%-]*$/g.test(enteredValue) && !operators.includes(enteredValue.slice(-1))) {
    // eslint-disable-next-line no-eval
    val = eval(enteredValue);
  }


  return (
    <div className="App">

      <div style={{ color: "purple", textAlign: "center" }}>
        <h1> CalCul </h1>
      </div>

      <div>

        <div style={{ textAlign: 'center' }}>
          <input type="text" value={enteredValue} onChange={handleNumberEnter}  placeholder="...Press or Enter number's" />
        </div>

        <div className='calc-solution'>
          {val} =
        </div>

        <div className='calc-number'>
          {
            [...Array(10).keys()].map((num, idx) => (
              <button key={idx} onClick={() => handleNumberClick(num)}> {num} </button>
            ))
          }

          {
            operators.map((operator) => (
              <button key={operator} onClick={() => handleNumberClick(operator)}>{operator}</button>
            ))
          }
          <button onClick={handleDeleteLastNumber}>DEL</button>
          <button onClick={handleClearAllNumbers}>CLR</button>
        </div>

      </div>

    </div>
  );
}

export default App;
