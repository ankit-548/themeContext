import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/theme'
import ToggleButton from './components/toggleButton';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  function darkTheme() {
    setThemeMode("dark")
  }
  function lightTheme() {
    setThemeMode("light")
  }

  // actaul theme handling using pure js
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div>
        <ToggleButton />
        <Card />
      </div>

    </ThemeContextProvider>
  )
}

export default App
