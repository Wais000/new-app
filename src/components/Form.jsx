import React, { useEffect } from "react";
import { GoSearch } from "react-icons/go";

const Form = ({ handleSubmit, language, languageHandler, searchRef }) => {
  useEffect(() => {
    searchRef.current.focus();
  }, [searchRef]);

  return (
 
  
  

<form>
    <div className="headline">
      <input type="text" placeholder="Search" ref={searchRef} /> 
      <div>   <GoSearch className="search-icon"/> </div>
     
      <button className="search-button" onClick={handleSubmit}>
      
      </button>
      </div>
      <label>
        <input
          type="radio"
          checked={language === "en"}
          value="en"
          onChange={languageHandler}
        />
        <span>EN</span>
      </label>
      <label>
        <input
          type="radio"
          checked={language === "fr"}
          value="fr"
          onChange={languageHandler}
        />
        <span>FR</span>
      </label>
      <label>

        <input
          type="radio"
          checked={language === "es"}
          value="es"
          onChange={languageHandler}
        />
        <span>ES</span>
      </label>
      <label>
        <input
          type="radio"
          checked={language === "de"}
          value="de"
          onChange={languageHandler}
        />
        <span>DE</span>
      </label>
    </form>
    

  );
};

export default Form;
