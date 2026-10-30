import React from 'react';
import Die from './component/Die';
import './App.css';
import Confetti from 'react-confetti';

function App() {
  let [diceNumbers, setDiceNumbers] = React.useState(() => generateAllNewDice());
  const buttonRef = React.useRef();
  const gameWon = diceNumbers.every(die => die.isHeld && die.value === diceNumbers[0].value);

  React.useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      let obj = {}
      obj.value = Math.floor(Math.random() * 6) + 1
      obj.isHeld = false;
      obj.id = i;
      newDice.push(obj)
    }

    return newDice
  }

  function rollDice() {
    if (gameWon) {
      setDiceNumbers(generateAllNewDice());
    } else {
      setDiceNumbers(dice => dice.map(die =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      ))
    }
  }

  function hold(id) {
    setDiceNumbers(oldDice => {
      return oldDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item
      })
    })
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to play again.</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className="dice-section">
        {diceNumbers.map((item, index) => (
          <Die value={item} key={index} hold={() => hold(item.id)} />
        ))}
        <button className='reroll' ref={buttonRef} onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
      </section>
    </main>
  )
}

export default App
