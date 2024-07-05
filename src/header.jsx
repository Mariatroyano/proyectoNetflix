// import { useEffect, useState } from 'react';
// import './Header.css'

// function Header() {

//   // const nav = document.querySelector("#nav");

//   // abrir.addEventListener("click", () => {//al darle cli abre el boton
//   //   nav.classList.add("visible");
//   // })

//   // cerrar.addEventListener("click", () => {// al darle
//   //   nav.classList.remove("visible");

//   // })

//   const [cerrar, setCerrar] = useState(false);
//   const [nav, setNav] = useState(true)

//   useEffect(() => {
//     if (setCerrar === true) {
//       setNav(false)
//     } else{
//       setNav(true)
//     }
//   }, [cerrar]);


//   return (
//     <div className="encabezado">
//       <header className='header'>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

//         <img className='logo' src="imagenes/Netflix_2015_logo.svg" alt="" />
//         <div className='container'>

//           <nav className="nav"  id={nav}>

//             <a href="#">Home</a>
//             <a href="#">TV Shown</a>
//             <a href="#">Movies</a>
//             <a href="#">New & Popular</a>
//             <a href="#">My List</a>
//           </nav>
//           <button onClick={cerrar} className="abrir-Menu">
//             <i className="bi bi-list"></i>

//           </button>
//         </div>

//         <div className="barra">
//           <button className='lupa'><i class="bi bi-search"></i></button>
//           <a href="#">kids</a>
//           <img className="logito" src="https://i.pinimg.com/originals/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />

//           <button className="lupa"><i className="bi bi-caret-down-fill"></i>
//           </button>
//         </div>

//         {/* <button onClick={handleButtonClick}  className="cerrar-menu">
//           <i className="bi bi-x-square-fill"></i>
//         </button> */}
//       </header>
//     </div >
//   );
// };

// export default Header;

import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const navElement = document.querySelector("#nav");
    if (navVisible) {
      navElement.classList.add("visible");
    } else {
      navElement.classList.remove("visible");
    }
  }, [navVisible]);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="encabezado">
      <header className="header">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

        <img className="logo" src="imagenes/Netflix_2015_logo.svg" alt="" />
        <div className="container">
          <nav className="nav" id="nav">
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">New & Popular</a>
            <a href="#">My List</a>
          
          <button onClick={toggleNav} className="abrir-menu">
            <i className="bi bi-list"></i>
          </button>

        <div className="barra">
          <button className="lupa"><i className="bi bi-search"></i></button>
          <a href="#">Kids</a>
          <img className="logito" src="https://i.pinimg.com/originals/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" />
          <button className="lupa"><i className="bi bi-caret-down-fill"></i></button>
        </div>
        </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
