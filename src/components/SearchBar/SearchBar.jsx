// inport style from './SearchBar.modules.css';
import { useState } from "react";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (evt) => {
      setInputValue(evt.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>{inputValue}</p>
      </div>
    );
  };
  

export  default SearchBar;
//Отримуємо замкнене коло.
// Користувач вводить символ в поле.
// Викликається колбек-функція, передана в onChange.
// Під час події onChange оновлюється значення стану.
// Під час зміни стану відбувається повторний рендер поля, оскільки значення атрибута value залежить від стану.//