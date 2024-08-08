import style from './LoginForm.module.css'


const LoginForm = () => {
const handleSubmit = (evt) => {
    evt.preventDefault();


const form = evt.target;
const {login, password} = form.elements;

console.log(login, password);
console.log(login.value, password.value);

form.reset();
}

    return (
      <form onSubmit={handleSubmit} className={style.container}>
        <input type="text" name="login"  placeholder="Username" className={style.input}/>
        <input type="password" name="password"   placeholder="Password" className={style.input}/>
        <button type="submit" className={style.button}>Log in</button>
      </form>
    );
  };
  
  export default LoginForm;