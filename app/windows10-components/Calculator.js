"use client"

import { useState } from "react"
import styles from "./Calculator.module.css"

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? String(num) : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".")
    }
  }

  const clear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue
      case "-":
        return firstValue - secondValue
      case "*":
        return firstValue * secondValue
      case "/":
        return firstValue / secondValue
      case "=":
        return secondValue
      default:
        return secondValue
    }
  }

  const percentage = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
  }

  const toggleSign = () => {
    setDisplay(String(parseFloat(display) * -1))
  }

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.displayContainer}>
        <div className={styles.display}>{display}</div>
      </div>

      <div className={styles.buttonGrid}>
        <button onClick={clear} className={`${styles.button} ${styles.clearButton}`}>
          AC
        </button>
        <button onClick={toggleSign} className={`${styles.button} ${styles.functionButton}`}>
          +/-
        </button>
        <button onClick={percentage} className={`${styles.button} ${styles.functionButton}`}>
          %
        </button>
        <button onClick={() => performOperation("/")} className={`${styles.button} ${styles.operatorButton}`}>
          ÷
        </button>

        <button onClick={() => inputNumber(7)} className={styles.button}>7</button>
        <button onClick={() => inputNumber(8)} className={styles.button}>8</button>
        <button onClick={() => inputNumber(9)} className={styles.button}>9</button>
        <button onClick={() => performOperation("*")} className={`${styles.button} ${styles.operatorButton}`}>
          ×
        </button>

        <button onClick={() => inputNumber(4)} className={styles.button}>4</button>
        <button onClick={() => inputNumber(5)} className={styles.button}>5</button>
        <button onClick={() => inputNumber(6)} className={styles.button}>6</button>
        <button onClick={() => performOperation("-")} className={`${styles.button} ${styles.operatorButton}`}>
          −
        </button>

        <button onClick={() => inputNumber(1)} className={styles.button}>1</button>
        <button onClick={() => inputNumber(2)} className={styles.button}>2</button>
        <button onClick={() => inputNumber(3)} className={styles.button}>3</button>
        <button onClick={() => performOperation("+")} className={`${styles.button} ${styles.operatorButton}`}>
          +
        </button>

        <button onClick={() => inputNumber(0)} className={`${styles.button} ${styles.zeroButton}`}>
          0
        </button>
        <button onClick={inputDecimal} className={styles.button}>.</button>
        <button onClick={() => performOperation("=")} className={`${styles.button} ${styles.equalsButton}`}>
          =
        </button>
      </div>
    </div>
  )
}
