import './App.css';
import {NavBar} from'./components/NavBar';
import {Content} from './components/Content';
import Image from './assets/images/illustration-devices.svg';

function App() {
  return (
    <div className="App">
     
      <div  className='navbar'>
        <NavBar />
      </div>

      <div className='img-container'>
        <img
          src={Image}
          alt='divece-ilustration'
          className='device'
          />
      </div>

      <div className='main'>
        <Content/>
      </div>
    </div>
  );
}

export default App;
