import React, { useEffect,useState } from "react"
import Hero from "./Components/Hero";
import { LuMoon,  LuSun }  from 'react-icons/lu'




const App = () => {
  const [darkMode, setDarkMode] = useState(()=>{
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    }
    else{
      document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
    }
  },[darkMode])

  const toggleDarkMode =()=>{
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen relative dark:bg-neutral-900 bg-neutral-100 isolate transition-colors duration-300">
      <button onClick={toggleDarkMode} className="fixed   top-3 lg:top-4 right-3 lg:right-4  bg-amber-500  w-9 lg:w-10 h-9 lg:h-10  rounded-full flex items-center  justify-center
      hover:bg-amber-600  shadow-lg  transition-colors duration-300">
        {  darkMode ?  (<LuSun/>)  : (<LuMoon/>) }
      </button>
      <div className="absolute -z-10 inset-0">
        <div className="absolute opacity-30 inset-0 dark:hidden" style={{backgroundImage: 'linear-gradient(to right(0, 0, 0, .5) 1px, transparent 1px), linear-gradient(to bottom(0, 0, 0, .5) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

        <div className="absolute inset-0 dark:hidden" style={{backgroundImage: 'radial-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

      </div>
      <Hero darkMode={darkMode} />
    </div>
  )
}

export default App
