inport style from './SearchBar.modules.css';
import { useState } from "react";

const SearchBar = () => {
    const [inputValue, setinputValue] = useState("");

return (
<div>
<input type="text" />
<p>{inputValue}</p>
</div>
);
};

export  default SearchBar;