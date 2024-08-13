import style from './LoginForm.module.css'


//У компоненті форми деструктуризуємо пропс onLogin, це функція, тому викликаємо її при сабміті форми і передаємо їй значення полів.

const LoginForm = ({ onLogin }) => {

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
      <input type="text" name="login" className={style.input} />
      <input type="password" name="password"  className={style.input}/>
      <button type="submit" className={style.button}>Login</button>
    </form>
    </div>
  );
};

  
  export default LoginForm;