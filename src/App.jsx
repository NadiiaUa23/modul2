import css from '../src/App.module.css';
// import ClickCounter from './components/izolstste/ClickCounter'
import { useState, useEffect } from "react";


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
// const App = () => { 
//   const [ clicks, setClicks ] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };
// 	return(
//     <>
//     <button onClick={handleClick}>Current: {clicks}</button>
//     <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//     {isOpen && <p>Now you can see me!</p>}
//   </>
//   )
// };


// const App = () => {

//   return (
//     <>
// 			<ClickCounter />
// 			<ClickCounter />
//     </>
//   );
// };

//?піднятя стану
// const App = () => {
// 	const [clicks, setClicks] = useState(0);

// 	// Функція, яку будемо передавати в ClickCounter
// 	// для виклику під час кліку
// 	const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
// 			<ClickCounter value={clicks} onUpdate={handleClick} />
// 			<ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// //?Оновлення об'єктів
// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
// 	  });
	
// 	const updateX = () => {
// 			setValues({
// 			...values,
// 			x: values.x + 1
// 		});
// 	};

// 	const updateY = () => {
// 		setValues({
// 			...values,
// 			y: values.y + 1
// 		});
// 	};

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };
// export default App;

//!lecshen2.1


// export default function App() {

//   const handleClick = (value) => {
//     console.log('hello this is click', value);
//   }

//   //якщо потрібен аргумент () => handleClick{5}
//   return (
//     <div className="{css.container}">
//       <h1> state in React </h1>
// <button onClick={() => handleClick(5) }>Hello</button>

//     </div>
//   );
// };

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

// const handleToggle = ( ) => {
//   setIsOpen(!isOpen);
// };

// return (

// <div className={css.container}>

// <button onClick={handleToggle} className={css.btn}>{isOpen ? "close" : "show"}</button>
// </div>

// )
// }
//
// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };
// компонент, який при монтуванні буде запускати інтервал для виведення повідомлення кожні дві секунди.
// const App = () => {

//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

//Створимо компонент Modal, в який перенесемо ефект із запуском інтервалу при монтуванні. В компоненті App додамо стан, який буде контролювати видимість компонента Modal.
// const Modal = () => {
//   useEffect(() => {
//     // setInterval(() => {
//     //   console.log(`Interval - ${Date.now()}`);
//     // }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

//Кожен з них виконує свою функцію, запускається відповідно до вказаних залежностей і незалежно від інших.

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//Отримаємо ефекти, які запускаються лише при зміні певних значень.
// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// збережемо кількість кліків між перезавантаженнями сторінки. Кожного разу, коли змінюється значення стану clicks, компонент оновлюється, і ми можемо записати ефект
const App = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(`Clicks changed - ${clicks}`);
  }, [clicks]);

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};



export default App;