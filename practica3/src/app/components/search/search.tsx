import { useState } from "react";
import "./search.css";

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ setSearch }: SearchProps) => {
  const [input, setInput] = useState(""); 

  
  return (
    <div className="barContainer">
      <input 
        className="input"
        type="text"
        placeholder="Buscar producto..."
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="button" 
        onClick={() => setSearch(input)}> 
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;