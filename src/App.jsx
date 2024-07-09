

//вар 1
// const App = () => {
// 	const handleClick = () => {
// 		alert("I'm a button!");
// 	};

// 	return <button onClick={handleClick}>Click me!</button>;
// };

//ВАР 2 анонімну інлайн-функцію.
// const App = () => {
// 	return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
// };

//Для інлайн функцій діють ті ж правила. Цей alert викликається при рендерингу компонента, а не при кліці!
// const App = () => { 
//   return <button onClick={alert('You clicked me!')}>Click me!</button>;
//   };

//Якщо ви хочете визначити ваш обробник подій вбудовано, оберніть його в анонімну функцію так:
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


const CustomButton = ({ message, children }) => {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
};

const App = () => {
  return (
    <>
      <CustomButton message="Playing music!">
        Play some music
      </CustomButton>
      <CustomButton message="Uploading your data!">
        Upload data
      </CustomButton>
    </>
  );
}


export default App;
