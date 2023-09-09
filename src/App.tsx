import { Outlet } from 'react-router-dom'
import Header from './components/Header'


export default function App() {

  return (
    <div className='bg-zinc-800 w-full '>
      <Header />
      <Outlet />
    </div>
  )
}