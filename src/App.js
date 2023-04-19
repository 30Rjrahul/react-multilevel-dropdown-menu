// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
// import Header from './components/Header';

function App() {
  return (
   <header className='App-header'>
    <div className="nav-area">
      <a href='#/' className='logo'>
        code solution
      </a>
      <Navbar/>
    </div>
   </header>
  );
}

export default App;
