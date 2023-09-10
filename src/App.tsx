import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css';


export default function App() {

  return (
    <div className='bg-zinc-800 w-full min-w-[641px]'>
      <Header />
      <Outlet />
    </div>
  )
}