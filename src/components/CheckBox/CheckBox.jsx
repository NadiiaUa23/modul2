import style from './CheckBox.module.css'
import {useState} from 'react';

const CheckBox = () => {
    const [hasAccepted, setHasAccepted] = useState(false);
    const handleChange = (evt) => {setHasAccepted(evt.target.checked);};


    return (
        <div>
      <label>
        <input 
        type="checkbox" 
        name="terms" 
        className={style.text}
        checked={hasAccepted}
        onChange={handleChange}
        /> 
				I accept terms and conditions
      </label>
      <button 
      type="button"
       disabled={!hasAccepted} 
       className={style.button}
       >Proceed</button>
    </div>
  );
};

export default CheckBox;