import style from './LangSwitcher.module.css'
import {useId } from "react";


const LangSwitcher = () => {
    const selectId = useId();
  
    return (
        /*{Выпадающий список (select)}*/
      <div className={style.conteiner} >
        <label htmlFor={selectId}>Choose language</label>
        <select id={selectId}>
          <option value="en">English</option>
          <option value="uk">Ukrainian</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    );
  };
  

  export default LangSwitcher;