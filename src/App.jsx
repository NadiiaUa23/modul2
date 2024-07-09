import {useState} from 'react';

//?вар 1
// const App = () => {
// 	const handleClick = () => {
// 		alert("I'm a button!");
// 	};

// 	return <button onClick={handleClick}>Click me!</button>;
// };

//?ВАР 2 анонімну інлайн-функцію.
// const App = () => {
// 	return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
// };

//?Для інлайн функцій діють ті ж правила. Цей alert викликається при рендерингу компонента, а не при кліці!
// const App = () => { 
//   return <button onClick={alert('You clicked me!')}>Click me!</button>;
//   };

//?Якщо ви хочете визначити ваш обробник подій вбудовано, оберніть його в анонімну функцію так:
// const App = () => { 
//     return <button onClick={() => alert('You clicked me!')}>Click me!</button>;
//     };

// const App = () => {
// 	const handleClick = (evt) => {
// 		console.log(evt);
// 	};

// 	return (
// 		<>
// 			<button onClick={handleClick}>First button</button>
// 			<button onClick={evt => console.log(evt)}>Second button</button>
// 		</>
// 	);
// };


// const CustomButton = ({ message, children }) => {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">
//         Play some music
//       </CustomButton>
//       <CustomButton message="Uploading your data!">
//         Upload data
//       </CustomButton>
//     </>
//   );
// }

//?Кожне натискання на кнопку повинно змінити 
//?значення змінної і відобразити нове значення в інтерфейсі. Проте це не працюватиме, ви можете спробувати!
// const App = () => { 
//   //замінимо локальну змінну clicks.
// 	// let clicks = 0;
//   const [ clicks, setClicks ] = useState(0);
//   //? 0 є початкове значення змінної стану

//   const handleClick = () => {
   
//     // clicks = clicks + 1;
//     setClicks(clicks + 5);
//   };

// 	return <button onClick={handleClick}>Current: {clicks}</button>
// };

//?Додамо до компонента App ще один стан isOpen, 
//?який буде контролювати відображення абзацу тексту
const App = () => { 
  const [ clicks, setClicks ] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
	return(
    <>
    <button onClick={handleClick}>Current: {clicks}</button>
    <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
    {isOpen && <p>Now you can see me!</p>}
  </>
  )
};

export default App;
