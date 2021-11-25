import React from 'react'
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Die from './components/Die';


function App () {
  
  const [dark, setDark] = React.useState(false)
  function handleClick(){
    setDark(dark => !dark)
  }
  return (
    <div className="container">
      <Navigation darkMode={dark} toggleDarkMode={handleClick} />
      <Main darkMode={dark}>
        <Die></Die>
      </Main>
      
    </div>
  );
}

export default App;
