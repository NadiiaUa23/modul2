import style from './RadioBoton.module.css';
import { useState } from "react";

const RadioBoton = () => {
    const [coffeeSize, setCoffeeSize] = useState("sm");
    
    return (
      <>
        <h1>Select coffee size</h1>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === "sm"}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === "md"}
          />
          Meduim
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === "lg"}
          />
          Large
        </label>
      </>
    );
  };
  


export default RadioBoton;