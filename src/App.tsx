
import './App.css';
import BrioAuto from './components/BrioAuto';
import Sidebar from './components/Sidebar';
import './styles/app.scss';

function App() {

  return (
    <div className='app-wrapper'>
        <Sidebar />
       <BrioAuto />
    </div>
  )
}

export default App
