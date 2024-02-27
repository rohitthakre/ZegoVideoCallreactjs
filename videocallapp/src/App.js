import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import RoomPage from './component/RoomPage';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
