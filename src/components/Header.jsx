import React from 'react'
import From from './Form'

const Header = ({ handleSubmit, language, languageHandler, searchRef, todaysDateDisplay }) => {

  console.log(searchRef);
  return (
    <header>
            
      <h3>{todaysDateDisplay}</h3>
      <h1>WORLD NEWS</h1>
      <aside>
        <From
          handleSubmit={handleSubmit} 
          language={language} 
          languageHandler={languageHandler} 
          searchRef={searchRef}
        />
        
      </aside>
    </header>
  )
}

export default Header