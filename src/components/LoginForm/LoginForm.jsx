import style from './LoginForm.module.css'
import { useId } from "react";

//У компоненті форми деструктуризуємо пропс onLogin, це функція, тому викликаємо її при сабміті форми і передаємо їй значення полів.

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <div className={style.container}>
    <form onSubmit={handleSubmit}>
      {/* <input type="text" name="login" className={style.input} />
      <input type="password" name="password"  className={style.input}/>
      <button type="submit" className={style.button}>Login</button> */}


      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} className={style.input} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} className={style.input}/>

      <button type="submit" className={style.button} >Login</button>
    </form>

    </div>
  );
};

  
  export default LoginForm;