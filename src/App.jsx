import { useState } from 'react'
import './App.css'
import { imagenes, imagenes2, imagenes3 } from './imagenes.jsx'
import Header from './header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='section'>
        <h3>Animadas</h3>
        <div className='imagenes'>
          {imagenes.map((e) => <img className='image' key={e.id} src={e.image} ></img>)}
        </div>
      </div>

      <div className='section'>
      <h3>Peliculas</h3>
        <div className='imagenes'>
          {imagenes2.map((e) => <img className='image' key={e.id} src={e.image} ></img>)}
        </div>
      </div>


      <div className='section'>
      <h3>Seriess</h3>
        <div className='imagenes'>
          {imagenes3.map((e) => <img className='image' key={e.id} src={e.image} ></img>)}
        </div>
      </div>
    </>
  );
}

export default App;
