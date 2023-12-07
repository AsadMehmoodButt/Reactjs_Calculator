import { useState } from "react";
import { buttonsData } from "./data/buttons-data";
import Logic from "./logic";
import Display from "./display";
import ToastMessage from "./toastMessage";

const Buttons = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    try {
      switch (value) {
        case "AC":
          setInput("");
          break;
        case "=":
          if (input) {
            setInput(calculate(input).toString());
            break;
          } else {
            ToastMessage("insert values");
          }
          break;
        case "DEL":
          setInput(input.substring(0, input.length - 1));
          break;
        default:
          setInput(input + value);
          break;
      }
    } catch (error) {
      ToastMessage("Entered wrong syntax");
      setInput("");
    }
  };

  const calculate = (expression) => {
    let operands = expression.split(/[\+\-\*\/]/);
    let operator = expression.match(/[\+\-\*\/]/);
    switch (operator[0]) {
      case "+":
        return parseFloat(operands[0]) + parseFloat(operands[1]);
      case "-":
        return parseFloat(operands[0]) - parseFloat(operands[1]);
      case "*":
        return parseFloat(operands[0]) * parseFloat(operands[1]);
      case "/":
        return parseFloat(operands[0]) / parseFloat(operands[1]);
      default:
        ToastMessage("Invalid syntax");
    }
  };

  return (
    <>
      <Display input={input} />
      <Logic handleClick={handleClick} buttonsData={buttonsData} />
    </>
  );
};

export default Buttons;
