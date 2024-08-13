import { useId } from "react";
import style from './MyComponent.module.css'

const MyComponent = () => {
  const id = useId();

  return (
    <div className={style.container}>
      <label htmlFor={id} >Text field label</label>
      <input type="text" id={id}  className={style.input}/>
    </div>
  );
};
export default MyComponent;