import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { createContext, useState } from 'react';

export type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType>("dark");

export default function App() {
  const [theme, setTheme] = useState<ThemeContextType>("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <Header />
        <Outlet />
        {/* <button
          className="w-3 h-3 fixed bottom-10 right-10 text-lg z-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌛"}
        </button> */}
        <div className='w-12 h-12 fixed bottom-5 right-5 text-lg z-10 
        hover:cursor-pointer hover:scale-125'
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === 'dark' ? <img src='/favicon/spider.png' /> : <img src='/favicon/ironman.png' />}
        </div>
      </div>
    </ThemeContext.Provider >
  )
}