
import './App.css';
import {useState} from 'react';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [addNumber, setAddNumber] = useState(null);
  const [minusNumber, setMinusNumber] = useState(null);
  const [multiplyNumber, setMultiplyNumber] = useState(null);
  const [divideNumber, setDivideNumber] = useState(null);
  const [percentNumber, setPercentNumber] = useState(null);

  let firstNumberValue = (event) => {
    setNumber1(event.target.value);
  }

  let secondNumberValue = (event) => {
    setNumber2(event.target.value);
  }

  let addTwoNumbers = () => {
    setAddNumber(parseFloat(number1) + parseFloat(number2));
  };

  let minusTwoNumbers = () => {
    setMinusNumber(parseFloat(number1) - parseFloat(number2));
  }

  let multiplyTwoNumbers = () => {
    setMultiplyNumber(parseFloat(number1) * parseFloat(number2));
  }

  let divideTwoNumbers = () => {
    setDivideNumber(parseFloat(number1) / parseFloat(number2));
  }

  let percentTwoNumber = () => {
    setPercentNumber((parseFloat(number1) * parseFloat(number2)) / 100)
  }




  return (
    <div className="App">
      <div className='mainDiv'>
        <input className='firstInput'
          onChange={firstNumberValue}
          placeholder='write the number'>
        </input>
        <input className='secondInput'
          onChange={secondNumberValue}
          placeholder='write the number'>
        </input>
        <p className='highP'>Click the buttons below for computations</p>
        <button className='plusButton'
          onClick={addTwoNumbers}>
          +
        </button>
        <button className='minusButton'
          onClick={minusTwoNumbers}>
          -
        </button>
        <button className='multiplyButton'
          onClick={multiplyTwoNumbers}>
          X
        </button>
        <button className='divideButton'
          onClick={divideTwoNumbers}>
          /
        </button>
        <button className='percentButton'
          onClick={percentTwoNumber}>
          %
        </button>
      <div className='summaryDiv'>
      <p className='middleP'>There are the computing results below</p>
        <div>
          <p className='sumP'>Sum: {addNumber}</p>
          <p className='difP'>Difference: {minusNumber}</p>
          <p className='mulP'>Multiply: {multiplyNumber}</p>
          <p className='divP'>Divide: {divideNumber}</p>
          <p className='perP'>Percent: {percentNumber}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
