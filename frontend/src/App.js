
import './App.css';
import Landing_page from './components/landing_page';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App flex flex-col h-[100vh] overflow-x-hidden">
        <Navbar />
        <Landing_page />
    </div>
  );
}

export default App;
