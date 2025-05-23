import { useState } from "react";
import Label from "./Label";
import Results from "./Results";
import { calculateInvestmentResults } from "../util/investment";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 4,
  });

  const inputValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  const annualData = calculateInvestmentResults({
    initialInvestment: userInput.initialInvestment,
    annualInvestment: userInput.annualInvestment,
    expectedReturn: userInput.expectedReturn,
    duration: userInput.duration,
  });

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <Label
            labelName={"Initial Investment"}
            inputId="initialInvestment"
            InputType={"number"}
            value={userInput.initialInvestment}
            onChange={handleChange}
          />
          <Label
            labelName={"Annual Investment"}
            inputId="annualInvestment"
            InputType={"number"}
            value={userInput.annualInvestment}
            onChange={handleChange}
          />
          <Label
            labelName={"Expected Return"}
            inputId="expectedReturn"
            InputType={"number"}
            value={userInput.expectedReturn}
            onChange={handleChange}
          />
          <Label
            labelName={"Duration"}
            inputId="duration"
            InputType={"number"}
            value={userInput.duration}
            onChange={handleChange}
          />
        </div>
      </section>
      {!inputValid && <p className="center">Please Enter Valid Duration</p>}
      {inputValid && <Results results={annualData} />}
    </>
  );
}
