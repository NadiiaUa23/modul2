import style from './LangSwitcher.module.css'
import {useId, useState } from "react";


// const LangSwitcher = () => {
//     const selectId = useId();
  
//     return (
//         /*{Выпадающий список (select)}*/
//       <div className={style.conteiner} >
//         <label htmlFor={selectId}>Choose language</label>
//         <select id={selectId}>
//           <option value="en">English</option>
//           <option value="uk">Ukrainian</option>
//           <option value="pl">Polish</option>
//         </select>
//       </div>
//     );
//   };
  
const LangSwitcher = () => {
    const selectId = useId();
    const [lang, setLang] = useState("uk");
  
    return (
      <div className={style.conteiner}>
        <label htmlFor={selectId}>Choose language</label>
        <select
          id={selectId}
          value={lang}
          onChange={(evt) => setLang(evt.target.value)}
        >
          <option value="uk">Ukrainian</option>
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    );
  };
  

  export default LangSwitcher;